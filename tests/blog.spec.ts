import { test, expect } from "@playwright/test"
import BlogPage from '../pages/blog.page'

test.describe('The Blog page', () => {
    let blogPage: BlogPage;

    test.beforeEach(async ({ page }) => {
        blogPage = new BlogPage(page);
        await blogPage.navigate(); 
    })
    
    test('Verify recent posts count and verify the length of each article titles', async ({ page }) => {
        for (const el of await blogPage.getPostsElement()) {
            expect(((await el.textContent())?.trim())?.length).toBeGreaterThan(10);
        }
        expect(await blogPage.getPostsCount()).toEqual(5);
    })
})
