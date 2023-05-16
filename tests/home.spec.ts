import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
    test('Open the "Home" page and verify the Title', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");
        await expect(page).toHaveTitle("Practice E-Commerce Site – Automation Bro")
    })   

    test('Navigate to the "About" page and verify the Title', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");
        await page.click('[id="menu-item-491"]');
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
        await expect(page).toHaveURL("https://practice.automationbro.com/about/");
    })

    test('Click on the "Get started" button using CSS selector', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");
        await page.locator('#get-started').click();
        await expect(page).toHaveURL(/.*#get-started/);
    })
    
    test('Verify text of all navigation links', async ({ page }) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]

        await page.goto("https://practice.automationbro.com/");
        const navLinks = page.locator('#primary-menu li[id*=menu]');
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    })
    
    
})
