import axios, { AxiosRequestConfig } from "axios";
import { store } from "@/store";
import { ElMessageBox, ElMessage } from "element-plus";
import { getToken } from "@/utils/auth";

//  instance
const service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000, // request timeout
});

//  interceptor
service.interceptors.request.use(
  (config) => {
    // do something
    if (store.state.user?.token) {
      config.headers["eshinseiToken"] = getToken();
    }
    return config;
  },
  (error) => {
    console.log(error); //  debug
    return Promise.reject(error);
  }
);

//  interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    //20000ではない場合、エラー
    if (res.code !== 20000) {
      ElMessageBox({
        message: res.message || "Error",
        type: "error",
      });

      // 50008:  Token 違う;
      // 50014: Token 期限切れ;
      if (res.code === 50008 || res.code === 50014) {
        //  再度ログインさせる
        store.dispatch("user/resetToken").then(() => {
          location.reload();
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return response;
    }
  },
  (error) => {
    console.log(error); //  debug
    ElMessage({
      message: error.message,
      type: "error",
      duration: 4 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
