import { Page, Locator } from '@playwright/test';

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    navLinks: Locator;
    aboutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.navLinks = page.locator('#primary-menu li[id*=menu]');
        this.aboutBtn = page.locator('[id="menu-item-491"]');
    }

    async navigate() {
        await this.page.goto("/");
    }

    async goToTheAboutPage() {
        await this.aboutBtn.click();
    }

    getNavLinksText() {
        return this.navLinks.allTextContents();
    }
}

export default HomePage;