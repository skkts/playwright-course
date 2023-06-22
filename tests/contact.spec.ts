import { test, expect } from "@playwright/test"
import ContactPage from "../pages/contact.page";

test.describe('The Contact page', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
    })
    
    test('Fill the forms on the Contact page and verify the success message', async ({ page }) => {
        await contactPage.submitForm('Test Name','test-email@test.com', '11111', 'Test message');
        await expect(page.getByText('Thanks for contacting us! We will be in touch with you shortly')).toBeVisible();
    })
})

