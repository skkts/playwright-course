import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home page', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    })
    
    test('Open the "Home" page and verify the Title', async ({ page }) => {
        await expect(page).toHaveTitle("Practice E-Commerce Site – Automation Bro")
    })   

    test('Navigate to the "About" page and verify the Title', async ({ page }) => {
        await homePage.goToTheAboutPage();
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
        await expect(page).toHaveURL("https://practice.automationbro.com/about/");
    })

    test('Click on the "Get started" button using CSS selector', async ({ page }) => {
        await homePage.getStartedBtn.click();
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
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    })  
})
