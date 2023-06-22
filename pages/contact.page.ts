import { Page, Locator } from '@playwright/test';

class ContactPage {
    private page: Page;
    nameField: Locator;
    emailField: Locator;
    phoneField: Locator;
    messageField: Locator;
    submitButton: Locator;

    constructor(page) {
        this.page = page;
        this.nameField = page.locator(".contact-name input");
        this.emailField = page.locator(".contact-email input");
        this.phoneField = page.locator(".contact-phone input");
        this.messageField = page.locator(".contact-message textarea");
        this.submitButton = page.getByRole("button", {name: "Submit"});

    }

    async navigate() {
        await this.page.goto("/contact/");
    }

    async submitForm(name: string, email: string, phone: string, message: string) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.phoneField.fill(phone);
        await this.messageField.fill(message);
        await this.submitButton.click();

    }

}

export default ContactPage;