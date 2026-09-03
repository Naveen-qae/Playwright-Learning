import { test } from "@playwright/test";
test('css locator' ,async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.waitForTimeout(5000);
    await page.locator('input[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.waitForTimeout(5000);
    await page.locator('input[type="password"]').fill('TestLeaf@2025')
    await page.waitForTimeout(5000);
    await page.locator('input[name="Login"]').click() 
    await page.waitForTimeout(5000);
})