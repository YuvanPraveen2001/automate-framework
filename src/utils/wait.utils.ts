export class WaitUtils {
  static async wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Add more custom wait utilities if Playwright's auto-wait isn't enough
}
