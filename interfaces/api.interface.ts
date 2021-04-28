export interface IApiResult<T> {
  code: number;
  status: string;
  message: string;
  result: T;
}
