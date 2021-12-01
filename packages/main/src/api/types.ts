export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  // eslint-disable-next-line camelcase
  access_token: string;
}
