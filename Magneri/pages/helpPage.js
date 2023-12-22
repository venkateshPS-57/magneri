const { expect } = require("@playwright/test");

exports.helpPage = class helpPage {
  constructor(page) {
    this.page = page;
    this.locSuppressBtn = "input[value='Suppress']";
    this.locNavigationBar =
      ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
    this.locPagePreviewBtn = "//a[normalize-space()='1']";
    this.locPreviousBtn = "//a[text()=' PREV']";
    this.locNextBtn = "//a[text()=' NEXT']";
  }
};
