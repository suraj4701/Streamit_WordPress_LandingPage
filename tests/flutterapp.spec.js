import { test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoStreamitFlutterAppVerify, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("Flutter App Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1468']").click();
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
});

test("Flutter App Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1468']").click();
    const TrustpilotVerifyLocator = page.locator("//div[@class='elementor-element elementor-element-5c56023 elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await EnvantoStreamitFlutterAppVerify(page, TrustpilotVerifyLocator);
});

test("Flutter App View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1468']").click();
    const TrustpilotVerifyLocator = page.locator("//div[@class='elementor-element elementor-element-68676d8 elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await UserAppPlaystore(page, TrustpilotVerifyLocator);
});

test("Flutter App Read More", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1468']").click();
    const visualAnalyticsLinkLocator = page.locator("(//a[@href='https://docs.flutter.dev/'])[1]");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://docs.flutter.dev/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});
