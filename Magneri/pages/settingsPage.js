const { expect } = require("@playwright/test");

exports.settingsPage = class settingsPage {
  constructor(page) {
    this.page = page;
    this.locUpdateBtn = "#update";
    this.locNavigationBar =
      ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
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

  async verifyColorOfUpdateBtn() {
    const element = await this.page.waitForSelector(this.locUpdateBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }
};
