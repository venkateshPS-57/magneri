const { expect } = require("@playwright/test");

exports.dashboardPage = class dashboardPage {
  constructor(page) {
    this.page = page;
    this.locNavBar = ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
    this.locSendBtn = "#send_btn";
    this.locReportsMenu = "//span[normalize-space()='Reports']";
    this.locMessages = "//span[normalize-space()='Messages']";
    this.locKeywords = "//span[normalize-space()='Keywords']";
    this.locImportContactsMenu = "//span[normalize-space()='Import Contacts']";
    this.locGlobalSuppressionsMenu =
      "//span[normalize-space()='Global Suppressions']";
    this.locSettingsMenu = "//span[normalize-space()='Settings']";
    this.locContacts = "//span[normalize-space()='Contacts']";
    this.locHelp = "//span[normalize-space()='Help']";
  }

  async verifyColorOfNavBar() {
    const element = await this.page.waitForSelector(this.locNavBar);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }

  async verifyColorOfSendBtn() {
    const element = await this.page.waitForSelector(this.locSendBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }

  async clickOnReportsTab() {
    await this.page.locator(this.locReportsMenu).click();
  }

  async clickOnMessagesTab() {
    await this.page.locator(this.locMessages).click();
  }

  async clickOnContactsTab() {
    await this.page.locator(this.locContacts).click();
  }

  async clickOnKeywordsTab() {
    await this.page.locator(this.locKeywords).click();
  }

  async clickOnImportContacts() {
    await this.page.locator(this.locImportContactsMenu).click();
  }

  async clickOnGlobalSuppressions() {
    await this.page.locator(this.locGlobalSuppressionsMenu).click();
  }

  async clickOnSettings() {
    await this.page.locator(this.locSettingsMenu).click();
  }

  async clickOnHelpTab() {
    await this.page.locator(this.locHelp).click();
  }
};
