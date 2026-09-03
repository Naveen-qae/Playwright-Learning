import { test } from '@playwright/test';

test('Create Lead', async ({ page }) => {

  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.locator('input[name="USERNAME"]').fill('Demosalesmanager');
  await page.locator('input[name="PASSWORD"]').fill('crmsfa');
  await page.locator('input[type="submit"]').click();
  await page.locator('a:has-text("CRM/SFA")').click();
  await page.locator('a:has-text("Leads")').click();
  await page.locator('a:has-text("Create Lead")').click();
  await page.locator('#createLeadForm_companyName').fill('Acme Corporation');
  await page.locator('#createLeadForm_firstName').fill('John');
  await page.locator('#createLeadForm_lastName').fill('Doe');
  await page.locator('#createLeadForm_annualRevenue').fill('500000');
  await page.locator('#createLeadForm_departmentName').fill('Sales');
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');
  await page.locator('input[type="submit"][value="Create Lead"]').click();

}); 