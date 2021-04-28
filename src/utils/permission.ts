import router from "@/router";
import { store } from "@/store";
import { ElMessage } from "element-plus";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // progress bar
import { getToken } from "@/utils/auth"; // get token from cookie

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const loginPage = "/login";

router.beforeEach(async (to, from, next) => {
  const token = getToken();
  NProgress.start();
  if (token) {
    next();
    // if (to.path === loginPage) {
    //     next({ path: "/" });
    // } else {
    //     const userEmail = store.state.user.email;
    //     if (userEmail) {
    //         next();
    //     } else {
    //         try {
    //             await store.dispatch("getInfo", token);
    //             next();
    //         } catch (error) {
    //             store.dispatch("resetToken");
    //             next(`${loginPage}?redirect=${to.path}`);
    //             console.log(error);
    //         }
    //     }
    // }
  } else {
    if (to.path === loginPage) {
      next();
    } else {
      next(`${loginPage}?redirect=${to.path}`);
    }
  }
  NProgress.done();
});

router.afterEach(() => {
  NProgress.done();
});
