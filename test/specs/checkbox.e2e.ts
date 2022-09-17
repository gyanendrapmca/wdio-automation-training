import checkboxPage from "../pageobjects/checkbox-page";

describe("My Second Demo Script", async function () {
    it("Division", async function () {
        let result = 10/2;
        expect(result).toEqual(5);
    })

    it("Multiply", async function() {
        let result = 2*2;
        expect(result).toEqual(4);
    })

    it("Array", async function() {
        const arr = [1,2,3,4];
        expect(arr).toBeElementsArrayOfSize(5);
    })

    it("String Contains", async function() {
        const helloworld = 'helloworldss';
        expect(helloworld).toContain('hello');
    })

    it("Boolean true", async function() {
        const result = 2>5;     // false
        expect(result).toBe(false);
    })

    it("Boolean true", async function() {
        const result = 7>5;     // false
        expect(result).toBe(true);
    })

    it("Checkbox Test Case", async function() {
        await checkboxPage.open();
    })
})
