import { Page } from '@playwright/test';
import UploadComponent from './component/upload.component';

class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        
    }

    uploadComponent() {
        return new UploadComponent(this.page);
    }

    navigate() {
        this.page.goto("https://practice.automationbro.com/cart/");
    }
}

export default CartPage;