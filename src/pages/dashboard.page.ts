import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { Table } from '../components/table.component';
import { Modal } from '../components/modal.component';

export class DashboardPage extends BasePage {
  public readonly userTable: Table;
  public readonly editModal: Modal;

  constructor(page: Page) {
    super(page);
    this.userTable = new Table(page, page.locator('#user-table'));
    this.editModal = new Modal(page, page.locator('.modal-container'));
  }

  private get welcomeMessage() { return this.page.locator('.welcome-msg'); }
  private get searchInput() { return this.page.locator('#search-input'); }
  private get successToast() { return this.page.locator('.toast-success'); }

  async getWelcomeMessage() {
    return await this.getText(this.welcomeMessage);
  }

  async searchInTable(text: string) {
    await this.fill(this.searchInput, text, 'Table Search');
  }

  async isSuccessToastVisible() {
    return await this.isVisible(this.successToast);
  }
}
