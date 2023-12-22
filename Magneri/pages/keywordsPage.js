const { expect } = require("@playwright/test");

exports.keywordsPage = class keywordsPage {
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
};
