export interface IAuthForm {
  name: string;
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
}