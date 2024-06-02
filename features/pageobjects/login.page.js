const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login-button');
    }

    get msgError() {
        return $('.error-message-container');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open() {
        return super.open('');
    }

}

module.exports = new LoginPage();
