import { Browser, Locator, Page } from "@playwright/test";
import  config  from "config";
import { LoginPage } from "./login.page";

export class MainPage {
    signInButton: Locator;
    agreeWithCookies: Locator;
    newPost: Locator;
    searchField: Locator;
    goAdFree: Locator;
    signUp: Locator;
    profileName: Locator;
    page: Page;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator('.Navbar-signin');
        this.agreeWithCookies = page.locator('text="AGREE"');
        this.newPost= page.locator( '.Button upload'),
        this.searchField= page.locator( '.Searchbar-textInput'),
        this.goAdFree= page.locator( 'text="Go Ad-Free"'),
        this.signUp= page.locator( '.Navbar-signup'),
        this.profileName = page.locator('.NavbarUserMenu .Dropdown-title span:nth-child(1)')
    }

    static async create(browser: Browser) {
        const context = await browser.newContext();
        const page = await context.newPage();
        return new MainPage(page);
    }
    public async signIn() {
        this.signInButton.click();
        return new LoginPage(this.page);
    }
    public async open(path: string) {
        this.page.goto(config.get('baseUrl') + path);
    }

    public async consentWithCookies() {
        this.agreeWithCookies.click();
    }

}