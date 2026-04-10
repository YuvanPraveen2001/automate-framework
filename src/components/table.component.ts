import { Locator, Page, expect } from '@playwright/test';
import { BaseComponent } from './base.component';
import { Logger } from '../utils/logger';

export class Table extends BaseComponent {
  constructor(page: Page, root: Locator) {
    super(page, root);
  }

  private get rows() { return this.root.locator('tr'); }
  private get headers() { return this.root.locator('th'); }

  async getRowCount(): Promise<number> {
    const count = await this.rows.count();
    Logger.info(`Table row count: ${count}`);
    return count;
  }

  async findRowByText(text: string): Promise<Locator> {
    Logger.info(`Finding row with text: ${text}`);
    return this.rows.filter({ hasText: text }).first();
  }

  async clickActionButtonInRow(rowText: string, buttonLabel: string) {
    Logger.info(`Clicking action button "${buttonLabel}" in row with text: ${rowText}`);
    const row = await this.findRowByText(rowText);
    await row.getByRole('button', { name: buttonLabel }).click();
  }

  async getCellValue(rowText: string, columnIndex: number): Promise<string> {
    const row = await this.findRowByText(rowText);
    const cell = row.locator('td').nth(columnIndex);
    return (await cell.innerText()).trim();
  }
}
