import { test, expect } from "@playwright/test"

test.describe('The Contact page', () => {
    test('Fill the forms on the Contact page and verify the success message', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/contact/");
        
        const nameField = page.locator(".contact-name input");
        const emailField = page.locator(".contact-email input");
        const phoneField = page.locator(".contact-phone input");
        const messageField = page.locator(".contact-message textarea");
        const submitButton = page.getByRole("button", {name: "Submit"});
    
        await nameField.fill('Test Name');
        await emailField.fill('test-email@test.com');
        await phoneField.fill('11111')
        await messageField.fill('Test message');
        await submitButton.click();
    
        await expect(page.getByText('Thanks for contacting us! We will be in touch with you shortly')).toBeVisible()
    })
})

