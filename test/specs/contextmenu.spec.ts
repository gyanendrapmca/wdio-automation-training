import contextMenuPage from "../pages/context-menu-page";

describe("Context Menu Example Test Suite", async function () {
  it("Navigate to context menu page", async function () {
    await contextMenuPage.open();
    await contextMenuPage.verifyHeading();
  });

  it("Verify right click in hot-spot area", async function () {
    await contextMenuPage.rightClick();
  });
});
