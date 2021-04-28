import request from "@/utils/request";
import { ILoginResult, IloginModel, IUserInfo } from "#/user.interface";
import { IApiResult } from "#/api.interface";
import { AxiosPromise } from "axios";

export function login(
  account: IloginModel
): AxiosPromise<IApiResult<ILoginResult>> {
  return request({
    url: "account/login",
    method: "post",
    data: account,
  });
}

export function getUerInfo(token: string): AxiosPromise<IUserInfo> {
  return request({
    url: "user/info",
    method: "get",
    params: { token },
  });
}
