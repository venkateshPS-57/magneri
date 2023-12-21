import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { dashboardPage } from "../pages/dashboardPage";
import { importContactsPage } from "../pages/importContactsPage";
import { globalSuppressionsPage } from "../pages/globalSuppressionsPage";
import { settingsPage } from "../pages/settingsPage";
import { reportsPage } from "../pages/reportsPage";
import { messagesPage } from "../pages/messagesPage";
import { contactsPage } from "../pages/contactsPage";
import { keywordsPage } from "../pages/keywordsPage";
import { helpPage } from "../pages/helpPage";
const testData = JSON.parse(JSON.stringify(require("../testData.json")));

test("LoginPage", async ({ page }) => {
  const login = new loginPage(page);
  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.verifyColorOfLoginBtn();
  await login.loginWithEmailAndPassword(
    testData.user1.mail,
    testData.user1.password
  );
});

test("DashboardPage", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user1.mail,
    testData.user1.password
  );
  await dashboard.verifyColorOfNavBar();
  await dashboard.verifyColorOfSendBtn();
});

test("ReportsTab", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  const reports = new reportsPage(page);

  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user1.mail,
    testData.user1.password
  );
  await dashboard.clickOnReportsTab();
  await page.waitForTimeout(5000);
  await reports.verifyColorOfNavigationBar();
  await reports.verifyColorOfPagePreviewBtn();
  await reports.verifyColorOfPreviousBtn();
  await reports.verifyColorOfNextBtn();
});

test("MessagesTab", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  const messages = new messagesPage(page);

  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user1.mail,
    testData.user1.password
  );
  await dashboard.clickOnMessagesTab();
  await page.waitForTimeout(5000);

  //Inbox
  await messages.clickOnInbox();
  await page.waitForTimeout(3000);

  await messages.verifyColorOfNavigationBar();
  await messages.verifyColorOfNextBtn();
  await messages.verifyColorOfPreviousBtn();

  //Outbox
  await page.waitForTimeout(3000);
  await messages.clickOnOutbox();
  //await page.waitForTimeout(30000);

  await messages.verifyColorOfNavigationBar();
  await messages.verifyColorOfPagePreviewBtn(); //Available only in Outbox- for USER1
  await messages.verifyColorOfNextBtn();
  await messages.verifyColorOfPreviousBtn();

  //Scheduled
  await page.waitForTimeout(3000);
  await messages.clickOnScheduled();
  //await page.waitForTimeout(3000);

  await messages.verifyColorOfNavigationBar();
  await messages.verifyColorOfNextBtn();
  await messages.verifyColorOfPreviousBtn();
});

test("ContactsTab", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  const contacts = new contactsPage(page);

  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user1.mail,
    testData.user1.password
  );
  await dashboard.clickOnContactsTab();
  await contacts.verifyColorOfNavigationBar();

  //All Contacts
  await contacts.clickOnAllContactsTab();
  await page.waitForTimeout(3000);

  await contacts.verifyColorOfNavigationBar();
  await contacts.verifyColorOfPagePreviewBtn(); //Available only in Outbox- for USER1
  await contacts.verifyColorOfNextBtn();
  await contacts.verifyColorOfPreviousBtn();

  //FirstContact
  await page.waitForTimeout(3000);
  await contacts.clickOnFirstContactTab();
  await page.waitForTimeout(3000);

  await contacts.verifyColorOfNavigationBar();
  await contacts.verifyColorOfNextBtn();
  await contacts.verifyColorOfPreviousBtn();
});

test("KeywordsPage", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  const keywords = new keywordsPage(page);
  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user2.mail,
    testData.user2.password
  );
  await dashboard.clickOnKeywordsTab();
  await page.waitForTimeout(5000);
  await keywords.verifyColorOfNavigationBar();
  await keywords.verifyColorOfPreviousBtn();
  await keywords.verifyColorOfNextBtn();
});

test("ImportContactsPage", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  const importContacts = new importContactsPage(page);
  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user1.mail,
    testData.user1.password
  );
  await dashboard.clickOnImportContacts();
  //await page.waitForTimeout(5000);
  await importContacts.verifyColorOfNavigationBar();
  //await page.waitForTimeout(5000);
  // await importContacts.selectingSelectGroupFromDropDown();
  // await page.waitForTimeout(5000);
  // await importContacts.selectingFirstGroupFromDropDown();
  // await importContacts.uploadingFile();
  // await page.waitForTimeout(3000);
  // await importContacts.importingFile();
  // await importContacts.verifyColorOfPagePreviewBtn(); //Availble only for USER1
  // await importContacts.verifyColorOfNextBtn();
  // await importContacts.verifyColorOfPreviousBtn();
});

test("GlobalSuppressionsPage", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  const globalSuppressions = new globalSuppressionsPage(page);
  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user1.mail,
    testData.user1.password
  );
  await dashboard.clickOnGlobalSuppressions();
  await page.waitForTimeout(5000);
  await globalSuppressions.verifyColorOfNavigationBar();
  await globalSuppressions.verifyColorOfSuppressBtn();
  await globalSuppressions.verifyColorOfPagePreviewBtn();
  await globalSuppressions.verifyColorOfPreviousBtn();
  await globalSuppressions.verifyColorOfNextBtn();
});

test("SettingsPage", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  const settings = new settingsPage(page);
  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user1.mail,
    testData.user1.password
  );
  await dashboard.clickOnSettings();
  await page.waitForTimeout(5000);
  await settings.verifyColorOfNavigationBar();
  await settings.verifyColorOfUpdateBtn();
});

test("HelpPage", async ({ page }) => {
  const login = new loginPage(page);
  const dashboard = new dashboardPage(page);
  const help = new helpPage(page);
  await login.goToLoginPage(testData.baseUrl.ProductionUrl);
  await login.loginWithEmailAndPassword(
    testData.user2.mail,
    testData.user2.password
  );
  await dashboard.clickOnHelpTab();
  await help.verifyColorOfNavigationBar();
});
