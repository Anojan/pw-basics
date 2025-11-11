import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage.js';
import { testFixtures } from './fixtures/testFixtures.js';

test.describe('Login Page Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('should display error message for invalid credentials', async () => {
        await loginPage.fillUsername(testFixtures.invalidUsername);
        await loginPage.fillPassword(testFixtures.invalidPassword);
        await loginPage.submit();
        
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe(testFixtures.expectedErrorMessage);
    });

    test('should log in successfully with valid credentials', async () => {
        await loginPage.fillUsername(testFixtures.validUsername);
        await loginPage.fillPassword(testFixtures.validPassword);
        await loginPage.submit();
        
        const welcomeMessage = await loginPage.getWelcomeMessage();
        expect(welcomeMessage).toBe(testFixtures.expectedWelcomeMessage);
    });
});
