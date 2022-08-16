import { test, expect } from '@playwright/test';


test('check main page title', async ({page}) => {
    await page.goto('https://imgur.com/');
    await expect(page).toHaveTitle('Imgur: The magic of the Internet');
  });

test('positive auth test', async ({page}) => {
    await page.goto('https://imgur.com/');
    await page.locator('#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button:nth-child(3)').click();
    await page.locator('.Navbar-signin').click();
    await page.locator('#username').type('testprogmath');
    await page.locator('#password').type('password123456');
    await page.locator('#Imgur').click();
  }); 
