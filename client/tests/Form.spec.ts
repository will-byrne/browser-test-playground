import { test, expect } from '@playwright/test';

test('can submit', async ({ page }) => {
  await page.goto('http://localhost:3000');
  expect(await page.screenshot()).toMatchSnapshot('form.png');
  await page.fill('input[name=name]', 'Sparkles the Unicorn');
  await page.fill('input[name=age]', "9000");
  await page.selectOption('select[name=favouriteColour]', 'glitter');
  await page.click('text=Submit');
  const responseMessage = await page.locator('h2');
  expect(await page.screenshot()).toMatchSnapshot('submitted.png');
  await expect(responseMessage).toHaveText('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
});