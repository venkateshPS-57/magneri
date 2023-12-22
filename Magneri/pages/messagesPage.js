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
