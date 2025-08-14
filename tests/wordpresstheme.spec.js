import { expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify } from './common';
const home_url = process.env.HOME_URL;

test("WordPress Theme Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("WordPress Theme OTT Home Page", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//a[@class='eael-wrapper-link-7a24cce --eael-wrapper-link-tag']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit-wordpress.iqonic.design/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Main Home Page", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//a[@class='eael-wrapper-link-d462c9a --eael-wrapper-link-tag']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit-wordpress.iqonic.design/main-home/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Movies Page", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//a[@class='eael-wrapper-link-5362a55 --eael-wrapper-link-tag']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit-wordpress.iqonic.design/movies-page/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Tv Show Page", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//a[@class='eael-wrapper-link-195fcf3 --eael-wrapper-link-tag']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit-wordpress.iqonic.design/tv-shows-page/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Videos Page", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//a[@class='eael-wrapper-link-d3450a0 --eael-wrapper-link-tag']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit-wordpress.iqonic.design/videos-page/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Merchandise Page", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//a[@class='eael-wrapper-link-cc32f97 --eael-wrapper-link-tag']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit-wordpress.iqonic.design/shop-home/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Not Sure Which Features Fit You?", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const EnvantoVerifyLocator = page.locator("//div[@class='elementor-element elementor-element-537abb2 elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("WordPress Theme Explore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-5a34529 elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit-wordpress.iqonic.design/shop-home/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Get It Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-90d20aa elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/pricing/");
    expect(page.url()).toBe("https://streamit.iqonic.design/pricing/");
});

test("WordPress Theme Watch Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-5b9d4b1 elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://www.youtube.com/playlist?list=PLSPY71mRbPj8HRtfCILwjGKR7DzFoetCl&si=o2F9E_twO40esNM3";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Get It Now2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-9f277eb elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/pricing/");
    expect(page.url()).toBe("https://streamit.iqonic.design/pricing/");
});

test("WordPress Theme View All Service", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const visualAnalyticsLinkLocator = page.locator("//a[@href='https://service.iqonic.design/product-category/streamit/']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://service.iqonic.design/product-category/streamit/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("WordPress Theme Talk To An OTT Expert", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2691']").hover();
    await page.locator("//li[@id='menu-item-1472']").click();
    const EnvantoVerifyLocator = page.locator("//div[@class='elementor-element elementor-element-c4ee88b elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})