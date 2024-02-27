export interface ITokenSuccess {
  statusText: 'success';
  status: number;
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface ITokenError {
  statusText: 'error';
  status: number;
  error: string;
  error_description: string;
}
