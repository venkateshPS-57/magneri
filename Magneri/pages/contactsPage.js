const { expect } = require("@playwright/test");

exports.contactsPage = class contactsPage {
  constructor(page) {
    this.page = page;
    this.locNavigationBar =
      ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
    this.locPagePreviewBtn = "//a[normalize-space()='1']";
    this.locPreviousBtn = "//a[text()=' PREV']";
    this.locNextBtn = "//a[text()=' NEXT']";
    this.locAllContacts = "//a[contains(text(),'All Contacts ')]";
    this.locFirstContactTab = "//a[contains(text(),'Test1 ')]";
  }

  async clickOnAllContactsTab() {
    await this.page.locator(this.locAllContacts).click();
  }

  async clickOnFirstContactTab() {
    await this.page.locator(this.locFirstContactTab).click();
  }
};
