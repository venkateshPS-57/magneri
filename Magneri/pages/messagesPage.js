const { expect } = require("@playwright/test");

exports.messagesPage = class messagesPage {
  constructor(page) {
    this.page = page;
    this.locNavigationBar =
      ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
    this.locInbox = "//a[text()='Inbox']";
    this.locOutbox = "//a[text()='Outbox']";
    this.locScheduled = "//a[text()='Scheduled']";
    this.locPagePreviewBtn = "//a[normalize-space()='1']";
    this.locPreviousBtn = "//a[text()=' PREV']";
    this.locNextBtn = "//a[text()=' NEXT']";
  }

  async verifyColorOfNavigationBar() {
    const element = await this.page.waitForSelector(this.locNavigationBar);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }

  async verifyColorOfPagePreviewBtn() {
    const element = await this.page.waitForSelector(this.locPagePreviewBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    // expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }

  async verifyColorOfPreviousBtn() {
    const element = await this.page.waitForSelector(this.locPreviousBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(24, 166, 137)"); //Light Green

    expect(color).toBe("rgb(13, 110, 253)"); //Light Blue //#0D6EFD color RGB value is rgb(13, 110, 253)
  }

  async verifyColorOfNextBtn() {
    const element = await this.page.waitForSelector(this.locNextBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(24, 166, 137)"); //Light Green

    expect(color).toBe("rgb(13, 110, 253)"); //Light Blue //#0D6EFD color RGB value is rgb(13, 110, 253)
  }

  async clickOnInbox() {
    await this.page.locator(this.locInbox).click();
  }

  async clickOnOutbox() {
    await this.page.locator(this.locOutbox).click();
  }

  async clickOnScheduled() {
    await this.page.locator(this.locScheduled).click();
  }
};