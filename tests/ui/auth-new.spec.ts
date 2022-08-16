import { test } from '../../src/ui/fixtures';
import { LoginPage } from '../../src/ui/page-objects/login.page';
import { expect } from '@playwright/test';
import config from 'config';
import { MainPage } from '../../src/ui/page-objects/main.page';

let loginPage: LoginPage;
const loginData = {
  login: config.get('username') as string,
  pass: config.get('password') as string,
  loginName: config.get('username') as string,
}
test('positive auth test with POM', async ({ mainPage }) => {
  await mainPage.open("/");
  await mainPage.consentWithCookies();
  loginPage = await mainPage.signIn();
  await loginPage.fillInTheForm(loginData.login, loginData.pass);
  expect(mainPage.profileName).toContainText(loginData.loginName);
  expect(mainPage.goAdFree).toContainText('Go Ad-Free');
});

test.afterEach(async function ({ page }) {
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
})