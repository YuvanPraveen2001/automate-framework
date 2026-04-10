import { Page, Locator, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

export abstract class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(path: string) {
    Logger.info(`Navigating to: ${path}`);
    await this.page.goto(path);
  }

  async click(locator: Locator | string, name?: string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    Logger.info(`Clicking ${name || 'element'}`);
    await element.click();
  }

  async fill(locator: Locator | string, value: string, name?: string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    Logger.info(`Filling ${name || 'field'} with value: ${value}`);
    await element.fill(value);
  }

  async getText(locator: Locator | string): Promise<string> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    const text = await element.innerText();
    Logger.info(`Got text: ${text}`);
    return text.trim();
  }

  async isVisible(locator: Locator | string): Promise<boolean> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    return await element.isVisible();
  }

  async waitForElement(locator: Locator | string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible' });
  }

  async uploadFile(locator: Locator | string, filePath: string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    Logger.info(`Uploading file: ${filePath}`);
    await element.setInputFiles(filePath);
  }

  async selectOption(locator: Locator | string, value: string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    Logger.info(`Selecting option: ${value}`);
    await element.selectOption(value);
  }
}
