import Page from "./page";
import * as EC from 'wdio-wait-for';

class AlertPage extends Page {

    private get heading() { return $('h3=JavaScript Alerts') }
    private get jsAlertButton() { return $('button=Click for JS Alert') }
    private get jsConfirmButton() { return $('button=Click for JS Confirm') }
    private get jsPromptButton() { return $('button=Click for JS Prompt') }
    private get button() { return $$('//button') }
    private get result() { return $('#result') }

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    public open() {
        return super.open('/javascript_alerts');
    }

    public async verifyHeading() {
        await this.heading.waitForDisplayed({timeout: 5000});
        expect(await this.heading.isDisplayed()).toBe(true);
    }

    public async clickJsAlert() {
        await this.jsAlertButton.waitForEnabled({timeout: 5000});
        await this.jsAlertButton.click();
    }

    public async clickConfirm() {
        await this.jsConfirmButton.waitForClickable({timeout: 5000});
        await this.jsConfirmButton.click();
    }

    public async clickJsPrompt() {
        await this.jsPromptButton.waitForClickable({timeout: 5000});
        await this.jsPromptButton.click();
    }

    public async verifyResult(message: string) {
        await browser.waitUntil(async()=> await this.result.getText()===message, {timeout: 15000});
        expect(await this.result.getText()).toEqual(message);
    }

    public async verifyThreeButtonIsDisplaying() {
        await browser.waitUntil(EC.numberOfElementsToBe(this.button, 3), {timeout: 10000});
        expect(await this.button.length).toEqual(3);
    }
}

export default new AlertPage();
