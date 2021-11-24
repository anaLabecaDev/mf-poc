export interface AuthRequest {
  userName: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
}
