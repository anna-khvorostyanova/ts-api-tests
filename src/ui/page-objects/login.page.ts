import { Browser, Page, Locator } from "@playwright/test";
import { MainPage } from "./main.page";

export class LoginPage {
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    submitButton: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.submitButton = page.locator('#Imgur');
  }

  static async create(browser: Browser) {
    const context = await browser.newContext();
    const page = await context.newPage();
    return new LoginPage(page);
  }

  public async fillInTheForm(username: string, password: string) {
    await this.usernameField.type(username);
    await this.passwordField.type(password);
    await this.submitButton.click();
    return new MainPage(this.page);
  }
}