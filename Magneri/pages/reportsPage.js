const { expect } = require("@playwright/test");

exports.reportsPage = class reportsPage {
  constructor(page) {
    this.page = page;
    this.locNavigationBar =
      ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
    this.locPagePreviewBtn = "//a[normalize-space()='1']";
    this.locPreviousBtn = "//a[text()=' PREV']";
    this.locNextBtn = "//a[text()=' NEXT']";
  }
};
