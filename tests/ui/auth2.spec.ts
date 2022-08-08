import {expect, test} from '@playwright/test'
import  config  from 'config';
import { browser } from '../../src/browser-instance';
import { MainPage } from '../../src/page-objects/main.page';
const userData = {
    login: config.get("username") as string,
    password: config.get("password") as string
}
const baseUrl: string = config.get('baseUrl');
let mainPage: MainPage;
test.beforeEach(async function ({}) {
   const page = await browser.getPage();
    mainPage = new MainPage(page, '');
})
test('check main page header', async function({page}) {
await page.goto(baseUrl);
await expect(page).toHaveTitle('Imgur: The magic of the Internet');
})

// add an object for user data 
test('check positive authentification', async function({page}) {
    await page.goto(baseUrl);
    await page.locator('#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button:nth-child(3)').click();
    await page.locator('.Navbar-signin').click();
    // await mainPage.signIn().click();
    await page.type('#username', userData.login);
    await page.type('#password', userData.password);
    await page.click('#Imgur');
    const userNameDropdown = await page.locator('.NavbarUserMenu > .Dropdown-title > span:nth-child(1)');
    await expect(userNameDropdown).toContainText('testprogmath');
    })