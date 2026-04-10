import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get usernameInput() { return this.page.locator('#username'); }
  private get passwordInput() { return this.page.locator('#password'); }
  private get loginButton() { return this.page.locator('button[type="submit"]'); }

  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username, 'Username');
    await this.fill(this.passwordInput, password, 'Password');
    await this.click(this.loginButton, 'Login Button');
  }
}
