import alertPage from "../pageobjects/alert.page"

describe("Alert Example Test Suite", async function(){

    it("JS Alert", async function() {
        await browser.setTimeout({pageLoad: 5000, implicit: 5000});
        await alertPage.open();
        await alertPage.verifyHeading();
        await alertPage.clickJsAlert();
        await browser.acceptAlert();
        await alertPage.verifyResult('You successfully clicked an alert');
    })


    it("JS Confirm- OK", async function() {
        await alertPage.open();
        await alertPage.verifyHeading();
        await alertPage.clickConfirm();
        await browser.acceptAlert();
        await alertPage.verifyResult('You clicked: Ok');
    })

    it("JS Confirm- Cancel", async function() {
        await alertPage.open();
        await alertPage.verifyHeading();
        await alertPage.clickConfirm();
        await browser.dismissAlert();
        await alertPage.verifyResult('You clicked: Cancel');
    })

    it("JS Prompt", async function() {
        const alertText = 'Prompt Alert';

        await alertPage.open();
        await alertPage.verifyHeading();
        await alertPage.clickJsPrompt();
        await browser.sendAlertText(alertText);
        await alertPage.verifyResult('You entered: '+alertText);
    })

    it("JS Three Button", async function() {
        await alertPage.open();
        await alertPage.verifyThreeButtonIsDisplaying();
    })
})