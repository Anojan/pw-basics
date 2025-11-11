class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.submitButton = 'button[type="submit"]';
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async fillUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    async fillPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    async submit() {
        await this.page.click(this.submitButton);
    }
}

export default LoginPage;