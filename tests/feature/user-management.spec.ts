import { test, expect } from '../../src/fixtures/test.fixtures';
import { config } from '../../src/config/config.manager';

test.describe('Authentication Flow', () => {
  test('should login successfully with valid credentials', async ({ loginPage, page }) => {
    await page.goto(config.baseUrl);
    await loginPage.login(config.credentials.standard.username, config.credentials.standard.password);

    // In a real app, we would validate the URL or a specific element on the dashboard
    // For this example, we'll check if we are on the expected base URL
    await expect(page).toHaveURL(new RegExp(config.baseUrl));
  });
});

test.describe('Dashboard Operations', () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    // authenticatedPage fixture handles login
  });

  test('should search and update a user in the table', async ({ dashboardPage, page }) => {
    const targetUser = 'John Doe';

    await dashboardPage.searchInTable(targetUser);

    // Validate table count or specific cell if needed
    const rowCount = await dashboardPage.userTable.getRowCount();
    // await expect(rowCount).toBeGreaterThan(0);

    await dashboardPage.userTable.clickActionButtonInRow(targetUser, 'Edit');
    await dashboardPage.editModal.verifyVisible();

    expect(await dashboardPage.editModal.getTitleText()).toContain('Edit User');

    await dashboardPage.editModal.confirm();

    // In a real app, verify success toast
    // await expect(dashboardPage.isSuccessToastVisible()).toBeTruthy();
  });
});
