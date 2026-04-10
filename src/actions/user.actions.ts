import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { config } from '../config/config.manager';

export class UserActions {
  constructor(private page: Page) {}

  async loginAndNavigateToDashboard() {
    const loginPage = new LoginPage(this.page);
    await this.page.goto(config.baseUrl);
    await loginPage.login(config.credentials.standard.username, config.credentials.standard.password);
  }

  async updateUserInfo(userName: string, newRole: string) {
    const dashboardPage = new DashboardPage(this.page);
    await dashboardPage.searchInTable(userName);
    await dashboardPage.userTable.clickActionButtonInRow(userName, 'Edit');
    await dashboardPage.editModal.verifyVisible();

    // Perform updates in modal
    await this.page.locator('#role-select').selectOption(newRole);
    await dashboardPage.editModal.confirm();
  }
}
