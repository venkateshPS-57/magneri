import { test, expect } from "@playwright/test";
import { basePage } from "../pages/basePage";

// Importing all required pages from POM
import { loginPage } from "../pages/loginPage";
import { reportsPage } from "../pages/reportsPage";
import { dashboardPage } from "../pages/dashboardPage"; //Send Text page and dashboard page are same
import { messagesPage } from "../pages/messagesPage";
import { contactsPage } from "../pages/contactsPage";
import { keywordsPage } from "../pages/keywordsPage";
import { importContactsPage } from "../pages/importContactsPage";
import { globalSuppressionsPage } from "../pages/globalSuppressionsPage";
import { settingsPage } from "../pages/settingsPage";
import { helpPage } from "../pages/helpPage";
import { describe } from "node:test";

//importing testdata's
const testData = JSON.parse(JSON.stringify(require("../testData.json")));

// Test --URL
const testURL = testData.baseUrl.ProductionUrl;

// Test --User Credential
const testUserMail = testData.user1.mail;
const testUserPassword = testData.user1.password;

//E2E TestScripts
test("LoginPage", async ({ page }) => {
  const login = new loginPage(page);
  await login.goToLoginPage(testURL);
  await login.verifyColorOfLoginBtn();
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
});

test("DashboardPage", async ({ page }) => {
  const login = new loginPage(page);
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);

  await base.waitTillNetworkIdle();
  await dashboard.verifyTitleOfPage();
  await dashboard.verifyUserMailIdIsSame(testUserMail);
  await dashboard.verifySearchIcon();
  await dashboard.verifyLogoutBtnIsPresentAndEnabled();
  await dashboard.verifyHeaderOfPage();
  await base.verifyColorOfNavigationBar();
  await dashboard.verifyColorOfSendBtn();
});

test("ReportsTab", async ({ page }) => {
  const login = new loginPage(page);
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);
  // const reports = new reportsPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await base.waitTillNetworkIdle();
  await dashboard.clickOnReportsTab();

  await base.waitTillNetworkIdle();
  await base.verifyColorOfNavigationBar();
  await base.verifyColorOfPagePreviewBtn();
  await base.verifyColorOfPreviousBtn();
  await base.verifyColorOfNextBtn();
});

test("MessagesTab", async ({ page }) => {
  const login = new loginPage(page);
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);
  const messages = new messagesPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await base.waitUntil5SecondsExplicitly();
  await base.waitTillNetworkIdle();
  await dashboard.clickOnMessagesTab();
  await base.waitTillNetworkIdle();

  //Inbox
  await messages.clickOnInbox();
  await base.waitTillNetworkIdle();

  await base.verifyColorOfNavigationBar();
  await base.verifyColorOfNextBtn();
  await base.verifyColorOfPreviousBtn();

  //Outbox
  await base.waitTillNetworkIdle();
  await messages.clickOnOutbox();

  await base.verifyColorOfNavigationBar();
  await base.verifyColorOfPagePreviewBtn(); //Available only in Outbox- for USER1
  await base.verifyColorOfNextBtn();
  await base.verifyColorOfPreviousBtn();

  //Scheduled
  await base.waitTillNetworkIdle();
  await messages.clickOnScheduled();

  await base.verifyColorOfNavigationBar();
  await base.verifyColorOfNextBtn();
  await base.verifyColorOfPreviousBtn();
});

test("ContactsTab", async ({ page }) => {
  const login = new loginPage(page);
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);
  const contacts = new contactsPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await dashboard.clickOnContactsTab();
  await base.verifyColorOfNavigationBar();

  //All Contacts
  await contacts.clickOnAllContactsTab();

  await base.waitTillNetworkIdle();
  await base.verifyColorOfNavigationBar();
  await base.verifyColorOfPagePreviewBtn(); //Available only in Outbox- for USER1
  await base.verifyColorOfNextBtn();
  await base.verifyColorOfPreviousBtn();

  //FirstContact
  await contacts.clickOnFirstContactTab();
  await base.waitTillNetworkIdle();

  await base.verifyColorOfNavigationBar();
  await base.verifyColorOfNextBtn();
  await base.verifyColorOfPreviousBtn();
});

test("KeywordsPage", async ({ page }) => {
  const login = new loginPage(page);
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);
  //const keywords = new keywordsPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await base.waitTillNetworkIdle();

  await dashboard.clickOnKeywordsTab();
  await base.waitTillNetworkIdle();
  await base.verifyColorOfNavigationBar();
  await base.verifyColorOfPreviousBtn();
  await base.verifyColorOfNextBtn();
});

test("ImportContactsPage", async ({ page }) => {
  const login = new loginPage(page);
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);
  const importContacts = new importContactsPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await dashboard.clickOnImportContactsTab();
  await base.waitTillNetworkIdle();
  await base.verifyColorOfNavigationBar();
  await importContacts.verifyColorOfNextBtn();

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
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);
  const globalSuppressions = new globalSuppressionsPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);

  await dashboard.clickOnGlobalSuppressionsTab();
  await base.waitTillNetworkIdle();
  await base.verifyColorOfNavigationBar();
  await globalSuppressions.verifyColorOfSuppressBtn();
  await base.verifyColorOfPagePreviewBtn();
  await base.verifyColorOfPreviousBtn();
  await base.verifyColorOfNextBtn();
});

test("SettingsPage", async ({ page }) => {
  const login = new loginPage(page);
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);
  const settings = new settingsPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await dashboard.clickOnSettingsTab();
  await base.waitTillNetworkIdle();
  await base.verifyColorOfNavigationBar();
  await settings.verifyColorOfUpdateBtn();
});

test("HelpPage", async ({ page }) => {
  const login = new loginPage(page);
  const base = new basePage(page);
  const dashboard = new dashboardPage(page);
  //const help = new helpPage(page);

  await login.goToLoginPage(testURL);
  await login.loginWithEmailAndPassword(testUserMail, testUserPassword);
  await dashboard.clickOnHelpTab();
  await base.verifyColorOfNavigationBar();
});
