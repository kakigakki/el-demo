export interface IloginModel {
  email: string;
  password: string;
}

export interface ILoginResult {
  accessToken: string;
  success: boolean;
}

export interface IUserInfo {
  email: string;
  id: string;
  name: string;
  role: string;
}
