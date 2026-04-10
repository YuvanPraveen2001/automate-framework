import { devConfig, qaConfig, uatConfig } from './environments';
import { EnvironmentConfig } from '../types/config.types';

export class ConfigManager {
  private static instance: ConfigManager;
  private config: EnvironmentConfig;

  private constructor() {
    const env = process.env.ENV || 'qa';
    switch (env.toLowerCase()) {
      case 'dev':
        this.config = devConfig;
        break;
      case 'qa':
        this.config = qaConfig;
        break;
      case 'uat':
        this.config = uatConfig;
        break;
      default:
        this.config = qaConfig;
    }
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  public getConfig(): EnvironmentConfig {
    return this.config;
  }
}

export const config = ConfigManager.getInstance().getConfig();
