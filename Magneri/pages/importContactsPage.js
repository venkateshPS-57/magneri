const { expect } = require("@playwright/test");

exports.importContactsPage = class importContactsPage {
  constructor(page) {
    this.page = page;
    this.locNextBtn = "#check_btn";
    this.locNavigationBar =
      ".navbar-minimalize.minimalize-styl-2.btn.btn-primary";
    this.locUploadBtn = "//button[text()='Upload']";
    this.locImportBtn = "//button[text()='Import']";
    this.locPagePreviewBtn = "//a[normalize-space()='1']";
    this.locPreviousBtn = "//a[text()=' PREV']";
    this.locNextBtn = "//button[@id='check_btn']";
  }

  async verifyColorOfNextBtn() {
    const element = await this.page.waitForSelector(this.locNextBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }

  async verifyColorOfUploadBtn() {
    const element = await this.page.waitForSelector(this.locUploadBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }

  async verifyColorOfImportBtn() {
    const element = await this.page.waitForSelector(this.locImportBtn);
    const color = await element.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });

    console.log(color);
    //expect(color).toBe("rgb(26, 179, 148)"); //Green

    expect(color).toBe("rgb(47, 128, 237)"); //Blue //#2F80ED color RGB value is (47,128,237)
  }

  async selectingSelectGroupFromDropDown() {
    //await page.waitForTimeout(3000);
    await page.locator("#import_to").selectOption("Select Group");
  }

  async selectingFirstGroupFromDropDown() {
    //await page.waitForTimeout(3000);
    await page.locator("#old_group").selectOption("2822"); //Test1 is group name
  }

  async uploadingFile() {
    await page.locator("#csv_contacts").click();
    // await page.locator("#csv_contacts").setInputFiles("importTest1.csv");
    await page.locator("#csv_contacts").setFiles("MagneridocsimportTest1.csv");
    await page.getByRole("button", { name: "Upload" }).click();
  }

  async importingFile() {
    await page.getByRole("button", { name: "Import" }).click();
    await page.locator("#map_1").selectOption("name");
    await page.locator("tr:nth-child(10) > td:nth-child(3)").click();
    await page.locator("#map_2").selectOption("phone");
    await page.locator("#map_3").selectOption("zipcode");
    await page.locator("#map_4").selectOption("email");
    await page.locator("#map_5").selectOption("lastname");
    await page.locator("#map_6").selectOption("address");
    await page.locator("#map_7").selectOption("city");
    await page.locator("#map_8").selectOption("var_1");
    await page.locator("th:nth-child(10)").click();
    await page.getByRole("button", { name: "Import" }).click();
  }
};
