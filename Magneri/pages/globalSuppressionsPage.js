const { expect } = require("@playwright/test");

exports.globalSuppressionsPage = class globalSuppressionsPage {
  constructor(page) {
    this.page = page;
    this.locSuppressBtn = "input[value='Suppress']";
    this.locNavigationBar =
      ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
    this.locPagePreviewBtn = "//a[normalize-space()='1']";
    this.locPreviousBtn = "//a[text()=' PREV']";
    this.locNextBtn = "//a[text()=' NEXT']";
  }

  async verifyColorOfSuppressBtn() {
    const element = await this.page.waitForSelector(this.locSuppressBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }
};
