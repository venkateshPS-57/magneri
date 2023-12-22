const { expect } = require("@playwright/test");

exports.loginPage = class loginPage {
  constructor(page) {
    this.page = page;
    this.locLogo = ".logo-name";
    this.locMailLabel = "";
    this.locMailField = "input[placeholder='email']";
    this.locPassLabel = "";
    this.locPassField = "input[placeholder='Password']";
    this.locLoginBtn = "button[name='login']";
    this.locForgotPassBtn = "";
    this.locCreateAccBtn = "";
  }

  async goToLoginPage(myUrl) {
    await this.page.goto(myUrl);
  }

  async loginWithEmailAndPassword(email, password) {
    await this.page.locator(this.locMailField).fill(email);
    await this.page.locator(this.locPassField).fill(password);
    await this.page.locator(this.locLoginBtn).click();
  }

  async verifyColorOfLoginBtn() {
    const element = await this.page.waitForSelector(this.locLoginBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }
};
