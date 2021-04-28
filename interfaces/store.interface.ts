export interface IUserState {
  email: string;
  id: string;
  name: string;
  token: string | undefined;
}

export interface IRootState {
  user: IUserState;
}
