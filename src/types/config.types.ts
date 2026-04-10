export interface EnvironmentConfig {
  baseUrl: string;
  apiUrl: string;
  credentials: {
    admin: {
      username: string;
      password: string;
    };
    standard: {
      username: string;
      password: string;
    };
  };
  timeout: number;
}
