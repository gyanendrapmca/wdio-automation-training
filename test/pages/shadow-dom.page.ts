import Page from "./page";

class ShadowDomPage extends Page {
  private get heading() {
    return $("h1=Simple template");
  }

  // using shadow$
  private get firstBlockText() { return $("#content").shadow$("span") }
  private get secondBlockText() { return $("#content").shadow$$("li") }

  // using deep elements
  private get firstText() { return $('>>>span') }
  private get secondText() { return $$('>>>li') }

  /////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////

  public open() {
    return super.open("shadowdom");
  }

  public async verifyHeading() {
    expect(await this.heading.isDisplayed()).toBe(true);
  }

  public async verifyFirstBlock(expectedText: string) {
    expect(await this.firstBlockText.getText()).toEqual(expectedText);
  }

  public async verifySecondBlock(expectedText: string[]) {
    for(let index in expectedText) {
      expect(await this.secondBlockText[index].getText()).toEqual(expectedText[index]);
    }
  }

  public async verifyFirstText(expectedText: string) {
    expect(await this.firstText.getText()).toEqual(expectedText);
  }

  public async verifySecondText(expectedText: string[]) {
    for(let index in expectedText) {
      expect(await this.secondText[index].getText()).toEqual(expectedText[index]);
    }
  }
}

export default new ShadowDomPage();