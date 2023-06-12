import { Page, Locator } from '@playwright/test';

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    navLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.navLinks = page.locator('#primary-menu li[id*=menu]');
    }

    async navigate() {
        await this.page.goto("https://practice.automationbro.com/");
    }

    getNavLinksText() {
        return this.navLinks.allTextContents();
    }
}

export default HomePage;