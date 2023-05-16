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

    test('Fill the forms on the Contsct page', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/contact/");
        
        const nameField = page.locator('input[id*=evf-277-field]').nth(0);
        const emailField = page.locator('input[id*=evf-277-field]').nth(1);
        const phoneField = page.locator('input[id*=evf-277-field]').nth(2);
        const messageField = page.locator('textarea[id*=evf-277-field]');
        const submitButton = page.locator('button[type=submit]');
        
        await nameField.fill('Test Name');
        await emailField.fill('test-email@test.com');
        await phoneField.fill('11111')
        await messageField.fill('Test message');

        await submitButton.click();

        await expect(page.getByText('Thanks for contacting us! We will be in touch with you shortly')).toBeVisible()


    })
    
    
    
})
