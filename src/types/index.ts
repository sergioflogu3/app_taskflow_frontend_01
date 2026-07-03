// Wrapper que usa el backend para todas las respuestas
export interface ApiResponse<T = unknown> {
  status: number;
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

// Lo que contiene data cuando el login/register es exitoso
export interface AuthPayload {
  token: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}
