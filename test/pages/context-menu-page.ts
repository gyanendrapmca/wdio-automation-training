import Page from "./page";

class ContextMenuPage extends Page {
  private get heading() { return $("h3=Context Menu") }
  private get hotSpot() { return $('#hot-spot') }
  public open() {
    return super.open("context_menu");
  }

  public async verifyHeading() {
    expect(await this.heading.isDisplayed()).toBe(true);
  }

  public async rightClick() {
    await this.hotSpot.click({button: 2});
  }
}

export default new ContextMenuPage();