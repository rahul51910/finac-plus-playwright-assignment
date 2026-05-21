import { test as base, Page } from '@playwright/test';

type MyFixtures = {

    customPage: Page;
};

export const test = base.extend<MyFixtures>({

    customPage: async ({ page }, use) => {

        // BEFORE EACH
        await page.goto('https://demoqa.com/login');

        // Execute Test
        await use(page);

        // AFTER EACH
        await page.close();
    }
});

export { expect } from '@playwright/test';;