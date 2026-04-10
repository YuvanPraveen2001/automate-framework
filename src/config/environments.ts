import { EnvironmentConfig } from '../types/config.types';

export const devConfig: EnvironmentConfig = {
  baseUrl: 'https://dev.example.com',
  apiUrl: 'https://api-dev.example.com',
  credentials: {
    admin: { username: 'admin_dev', password: 'password_dev' },
    standard: { username: 'user_dev', password: 'password_dev' }
  },
  timeout: 30000
};

export const qaConfig: EnvironmentConfig = {
  baseUrl: 'https://qa.example.com',
  apiUrl: 'https://api-qa.example.com',
  credentials: {
    admin: { username: 'admin_qa', password: 'password_qa' },
    standard: { username: 'user_qa', password: 'password_qa' }
  },
  timeout: 30000
};

export const uatConfig: EnvironmentConfig = {
  baseUrl: 'https://uat.example.com',
  apiUrl: 'https://api-uat.example.com',
  credentials: {
    admin: { username: 'admin_uat', password: 'password_uat' },
    standard: { username: 'user_uat', password: 'password_uat' }
  },
  timeout: 60000
};
