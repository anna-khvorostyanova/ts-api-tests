import { test as base, Browser } from '@playwright/test';
import { LoginPage } from './page-objects/login.page';
import { MainPage } from './page-objects/main.page';

// Declare the types of your fixtures.
type MyFixtures = {
    mainPage: MainPage;
    // adminPage: AdminPage;
    // authorizedUserPage: UserPage;
  };
  
  // This new "test" can be used in multiple test files, and each of them will get the fixtures.
  export const test = base.extend<MyFixtures>({
    mainPage: async ({ browser }, use) => {
      await use(await MainPage.create(browser));
    },
  });