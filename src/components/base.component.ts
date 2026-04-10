import { Locator, Page } from '@playwright/test';
import { Logger } from '../utils/logger';

export abstract class BaseComponent {
  constructor(protected page: Page, protected root: Locator) {}

  async isVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }

  async waitForVisible() {
    await this.root.waitFor({ state: 'visible' });
  }
}
