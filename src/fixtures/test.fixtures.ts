import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { config } from '../config/config.manager';

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  authenticatedPage: Page;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  authenticatedPage: async ({ page, loginPage }, use) => {
    await page.goto(config.baseUrl);
    // In a real scenario, you'd use stored storage state if possible
    // For this example, we'll perform a login
    await loginPage.login(config.credentials.standard.username, config.credentials.standard.password);
    await use(page);
  },
});

export { expect } from '@playwright/test';
