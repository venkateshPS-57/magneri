const { expect } = require("@playwright/test");

exports.dashboardPage = class dashboardPage {
  constructor(page) {
    this.page = page;
    this.locNavBar = ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
    this.locHeader = "//h2";
    this.locSearchIcon = "//button[@id='search_toggle']";
    this.locUserMail = "//span[@class='m-r-sm text-muted welcome-message']";
    this.locLogout = "//a[normalize-space()='Log out']";
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

  async verifyTitleOfPage() {
    await expect(this.page).toHaveTitle("Magneri"); //Need to change it to Magneri
  }

  async verifySearchIcon() {
    const searchIcon = await this.page.locator(this.locSearchIcon);
    await expect(searchIcon).toBeVisible();

    //await this.page.locator(this.locSearchIcon).toBeVisible();
  }

  async verifyUserMailIdIsSame(mail) {
    await expect(await this.page.locator(this.locUserMail)).toContainText(mail);
  }

  async verifyLogoutBtnIsPresentAndEnabled() {
    await expect(await this.page.locator(this.locLogout)).toBeVisible();
    //.toBeEnabled();
  }
  async verifyHeaderOfPage() {
    await expect(await this.page.locator(this.locHeader)).toHaveText(
      "Send Text"
    );
    //await this.page.locator(this.locHeader).expect(toBe("Send Text"));
  }

  async verifyColorOfSendBtn() {
    const element = await this.page.waitForSelector(this.locSendBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
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

  async clickOnImportContactsTab() {
    await this.page.locator(this.locImportContactsMenu).click();
  }

  async clickOnGlobalSuppressionsTab() {
    await this.page.locator(this.locGlobalSuppressionsMenu).click();
  }

  async clickOnSettingsTab() {
    await this.page.locator(this.locSettingsMenu).click();
  }

  async clickOnHelpTab() {
    await this.page.locator(this.locHelp).click();
  }
};
