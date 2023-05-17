import { test, expect } from "@playwright/test"

test.describe('The Blog page', () => {
    test('Verify recent posts count and verify the length of each article titles', async ({ page }) => {
        
        await page.goto("https://practice.automationbro.com/blog/");

        const recentPostsList = page.locator('#recent-posts-3 ul li');
        
        for (const el of await recentPostsList.elementHandles()) {
            expect(((await el.textContent())?.trim())?.length).toBeGreaterThan(10);
        }

        expect(await recentPostsList.count()).toEqual(5);
    })
})
