import { test, expect } from '@playwright/test';
import config from 'config';
import { AccountController } from '../../src/module/imgur/controller/account.controller';
const USER = 'testprogmath';
const TOKEN: string = config.get('authorization');
const defaultAccountData = {
  id: 145270851,
  url: "testprogmath",
};


test('get account info', async () => {
  const accountBaseResponse = await AccountController.getAccountBaseInfo(USER, TOKEN);
  console.log(accountBaseResponse.body);
  expect(accountBaseResponse.status).toEqual(200);
  expect(accountBaseResponse.body.status).toEqual(200);
  expect(accountBaseResponse.body.data.id).toEqual(defaultAccountData.id);
  expect(accountBaseResponse.body.data.url).toEqual(defaultAccountData.url);
});
