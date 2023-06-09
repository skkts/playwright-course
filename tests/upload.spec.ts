import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path');

test.describe('Upload File', () => {
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.navigate(); 
  })
  

    test('Should upload a test file', async ({ page }) => { 
      const filePath = path.join(__dirname, '../data/cat.png');
      cartPage.uploadComponent().uploadFile(filePath);
      await expect(cartPage.uploadComponent().successTxt)
        .toContainText('uploaded successfully');
    })
    
    test('Should upload a test file on a hidden input field', async ({ page }) => { 
      const filePath = path.join(__dirname, '../data/cat.png');
      await page.evaluate(() => {
        const selector = document.querySelector('input#upfile_1');
        if (selector) {
          selector.className = ''
        }
      })
      await page.setInputFiles('input#upfile_1', filePath);
      await page.locator('#upload_1').click();
      await (page.locator('#wfu_messageblock_header_1_label_1'))
        .waitFor({ state: 'visible', timeout: 10000 });
      await expect(page.locator('#wfu_messageblock_header_1_label_1'))
        .toContainText('uploaded successfully');
    })  
    
})

