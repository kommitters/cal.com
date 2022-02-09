import { expect, test } from "@playwright/test";
import { randomString } from "../lib/random";

test.beforeEach(async ({ page }) => {
  await page.goto("/settings/teams");
  await page.waitForSelector('[data-testid=teams]');
});

test.describe('owner user', () => {

  test.use({ storageState: "playwright/artifacts/teamproStorageState.json" });

  test('can disband a team', async ({ page }) => {
    const nonce = randomString(5);
    const teamName = `Team ${nonce}`;
    await page.click("[data-testid=new-team]");
    await page.fill("[name=name]", teamName);
    await page.click('[type=submit]');
    await expect(page.locator(`text='${teamName}'`)).toBeVisible();

    const $teams = await page.$$('[data-testid=teams] > *');
    expect($teams.length).toBeGreaterThanOrEqual(0);
    const [$first] = $teams;
    $first.click();

    await page.click("[data-testid=disband-team]");
    await page.click("[data-testid=confirmbt-disband-team]");
    await expect(page).toHaveURL("/settings/teams");
  });
});

