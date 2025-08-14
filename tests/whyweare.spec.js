import { test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("WhyWeare For Developer Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2692']").hover();
    await page.locator("//li[@id='menu-item-1470']").click();
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("WhyWeare For Developer Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2692']").hover();
    await page.locator("//li[@id='menu-item-1470']").click();
    const TrustpilotVerifyLocator = page.locator("//a[@href='https://www.trustpilot.com/review/iqonic.design']");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("WhyWeare For Developer Envanto", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2692']").hover();
    await page.locator("//li[@id='menu-item-1470']").click();
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-95165bc elementor-widget elementor-widget-image']//a");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://themeforest.net/collections/11400453-streamit-all-products";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WhyWeare For Developer Hire Us", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2692']").hover();
    await page.locator("//li[@id='menu-item-1470']").click();
    const visualAnalyticsLinkLocator = page.locator("//a[@href='https://iqonic.tech/ott-solutions/']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit.iqonic.tech/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WhyWeare For Business Owner Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2692']").hover();
    await page.locator("//li[@id='menu-item-1469']").click();
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("WhyWeare For Business Owner Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2692']").hover();
    await page.locator("//li[@id='menu-item-1469']").click();
    const TrustpilotVerifyLocator = page.locator("//a[@href='https://www.trustpilot.com/review/iqonic.design']");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("WhyWeare For Business Owner Envanto", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2692']").hover();
    await page.locator("//li[@id='menu-item-1469']").click();
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-62b6aca elementor-widget elementor-widget-image']//a");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://themeforest.net/collections/11400453-streamit-all-products";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});