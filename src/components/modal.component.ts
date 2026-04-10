import { Locator, Page, expect } from '@playwright/test';
import { BaseComponent } from './base.component';
import { Logger } from '../utils/logger';

export class Modal extends BaseComponent {
  constructor(page: Page, root: Locator) {
    super(page, root);
  }

  private get title() { return this.root.locator('.modal-title, h2'); }
  private get body() { return this.root.locator('.modal-body, p'); }
  private get confirmButton() { return this.root.getByRole('button', { name: /confirm|ok|save/i }); }
  private get cancelButton() { return this.root.getByRole('button', { name: /cancel|close/i }); }

  async getTitleText(): Promise<string> {
    return (await this.title.innerText()).trim();
  }

  async getBodyText(): Promise<string> {
    return (await this.body.innerText()).trim();
  }

  async confirm() {
    Logger.info('Confirming modal');
    await this.confirmButton.click();
  }

  async cancel() {
    Logger.info('Canceling modal');
    await this.cancelButton.click();
  }

  async verifyVisible() {
    await expect(this.root).toBeVisible();
  }
}
