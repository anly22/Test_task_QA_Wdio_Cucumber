const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}


Given(/^user is on (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^user login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^the message (.*) is displayed$/, async (message) => {
    await expect(LoginPage.msgError).toBeExisting();
    await expect(LoginPage.msgError).toHaveText(message);
});
