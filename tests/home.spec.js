import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoStreamitVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Home User Website Verify", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//a[@href='https://streamit-wordpress.iqonic.design/']");
    await WebsiteVerify(page, adminpanelLocator);
})

// test.only("Home AdminPanel Verify", async ({ page }) => {
//     await page.goto(home_url);
//     const adminpanelLocator = page.locator("//a[@href='https://templates.iqonic.design/streamit-dist/intro/']");
//     await AdminPanelVerify(page, adminpanelLocator);
// })

test("Home Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    const TrustpilotVerifyLocator = page.locator("//a[@href='https://www.trustpilot.com/review/iqonic.design']");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Home Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Streamit WordPress", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-ec3a652 elementor-align-center elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/products/wordpress-theme-for-video-streaming-website/");
    expect(page.url()).toBe("https://streamit.iqonic.design/products/wordpress-theme-for-video-streaming-website/");
});

test("Home Streamit HTML", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-56a0d75 elementor-align-center elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/products/laravel-admin-panel-for-ott-solution/");
    expect(page.url()).toBe("https://streamit.iqonic.design/products/laravel-admin-panel-for-ott-solution/");
});

test("Home Streamit WordPress Plugin", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-d33f915 elementor-align-center elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/products/best-video-streaming-wordpress-plugin/");
    expect(page.url()).toBe("https://streamit.iqonic.design/products/best-video-streaming-wordpress-plugin/");
});

test("Home Streamit Flutter App", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//a[@href='https://streamit.iqonic.design/product/flutter-video-streaming-app/']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/products/flutter-video-streaming-app/");
    expect(page.url()).toBe("https://streamit.iqonic.design/products/flutter-video-streaming-app/");
});

test("Home Streamit Laravel", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-ab71ed7 elementor-align-center elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit-laravel.iqonic.design/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("Home Understand Streamit Better", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//div[@class='elementor-element elementor-element-464ac3c elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Explore Streamit For Developers", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-6f3514d elementor-align-center elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/why-we-are-different/best-ott-video-streaming-solution-for-developers/");
    expect(page.url()).toBe("https://streamit.iqonic.design/why-we-are-different/best-ott-video-streaming-solution-for-developers/");
});

test("Home Explore Streamit For Owners", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-1fc99b9 elementor-align-center elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/why-we-are-different/best-ott-solution-for-business-owners/");
    expect(page.url()).toBe("https://streamit.iqonic.design/why-we-are-different/best-ott-solution-for-business-owners/");
});

test("Home Not Sure Which Features Fit You?", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//div[@class='elementor-element elementor-element-f94691f elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Get It Now", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-d34e11f elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit.iqonic.design/pricing/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("Home Watch Now", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-2fb2e98 elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://www.youtube.com/playlist?list=PLSPY71mRbPj8HRtfCILwjGKR7DzFoetCl&si=o2F9E_twO40esNM3";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("Home Talk to an OTT Expert", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//div[@class='elementor-element elementor-element-fa5ac15 elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Purchase Theme", async ({ page }) => {
    await page.goto(home_url);
    const envantoFrezkaLinkLocator = page.locator("//div[@class='elementor-element elementor-element-3ff43d9 elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await envantoFrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoStreamitVerify(page, envantoFrezkaLinkLocator);
});

test("Home Explore Streamit", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-37da71d elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://streamit.iqonic.design/explore-streamit/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("Home Purchase Now", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-bd5c2df elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://themeforest.net/collections/11400453-streamit-all-products";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("Home Footer WordPress Theme", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-94c6ef0 e-con-full e-flex e-con e-child']//li[1]//a[1]");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/products/wordpress-theme-for-video-streaming-website/");
    expect(page.url()).toBe("https://streamit.iqonic.design/products/wordpress-theme-for-video-streaming-website/");
});

test("Home Footer Plugin", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//span[normalize-space()='Plugin']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/products/best-video-streaming-wordpress-plugin/");
    expect(page.url()).toBe("https://streamit.iqonic.design/products/best-video-streaming-wordpress-plugin/");
});

test("Home Footer Admin Template", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//span[normalize-space()='Admin Template']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/products/laravel-admin-panel-for-ott-solution/");
    expect(page.url()).toBe("https://streamit.iqonic.design/products/laravel-admin-panel-for-ott-solution/");
});

test("Home Footer Flutter App", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//span[normalize-space()='Flutter App']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/products/flutter-video-streaming-app/");
    expect(page.url()).toBe("https://streamit.iqonic.design/products/flutter-video-streaming-app/");
});

test("Home Footer Doc", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//div[@class='elementor-element elementor-element-e64107f e-con-full e-flex e-con e-child']//li[1]//a[1]");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/documentation/");
    expect(page.url()).toBe("https://streamit.iqonic.design/documentation/");
});

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//a[@href='https://streamit.iqonic.design/faq/']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/faq/");
    expect(page.url()).toBe("https://streamit.iqonic.design/faq/");
});

test("Home Footer Videos", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//span[normalize-space()='Videos']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://www.youtube.com/playlist?list=PLSPY71mRbPj8HRtfCILwjGKR7DzFoetCl&si=o2F9E_twO40esNM3";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//span[normalize-space()='Support']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
});

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const visualAnalyticsLinkLocator = page.locator("//span[normalize-space()='Pricing']");
    await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
    await visualAnalyticsLinkLocator.click();
    await page.waitForURL("https://streamit.iqonic.design/pricing/");
    expect(page.url()).toBe("https://streamit.iqonic.design/pricing/");
});

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const blogLinkLocator = page.locator("//span[normalize-space()='License']");
    await blogLinkLocator.scrollIntoViewIfNeeded();
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        blogLinkLocator.click()
    ]);
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://iqonic.design/licensing-terms-more/");
});

test("Home Footer Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const blogLinkLocator = page.locator("//span[normalize-space()='Hire Us']");
    await blogLinkLocator.scrollIntoViewIfNeeded();
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        blogLinkLocator.click()
    ]);
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://streamit.iqonic.tech/");
});

test("Home Footer IQONIC DESIGN", async ({ page }) => {
    await page.goto(home_url);
    const blogLinkLocator = page.locator("//a[normalize-space()='IQONIC DESIGN']");
    await blogLinkLocator.scrollIntoViewIfNeeded();
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        blogLinkLocator.click()
    ]);
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://iqonic.design/");
});

test("Home Footer Facebook", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[@class='elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-c762217']");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("Home Footer Youtube", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[@class='elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-9d19eea']");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/c/IqonicDesign");
})

test("Home Footer X-Twitter", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[@class='elementor-icon elementor-social-icon elementor-social-icon-x-twitter elementor-repeater-item-a0526cd']");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})

test("Home Footer Instagram", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[@class='elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-0dca412']");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.instagram.com/iqonicdesign/");
})
