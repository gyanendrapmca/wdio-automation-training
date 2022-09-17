import shadowDomPage from "../pages/shadow-dom.page";

describe("Shadow DOM Example Test Suite", async function () {
  it("Verify heading for shadow DOM page", async function () {
    await shadowDomPage.open();
    await shadowDomPage.verifyHeading();
  });

  it("Verify first block text", async function () {
    const blockText = `Let's have some different text!`;
    await shadowDomPage.verifyFirstBlock(blockText);
  });

  it("Verify second block text", async function () {
    const blockText = [`Let's have some different text!`, `In a list!`];
    await shadowDomPage.verifySecondBlock(blockText);
  });

  it("Verify first block text using deep element", async function () {
    const blockText = `Let's have some different text!`;
    await shadowDomPage.verifyFirstText(blockText);
  });

  it("Verify second block text using deep element", async function () {
    const blockText = [`Let's have some different text!`, `In a list!`];
    await shadowDomPage.verifySecondText(blockText);
  });
});
