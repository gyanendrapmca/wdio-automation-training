import assertion from "../utils/assertion";

describe("Assertion Test Suite", async function () {
    it("Division", async function () {
        let result = 10/2;
        assertion.toEqual(result, 5);
    })

    it("Multiply", async function() {
        let result = 2*2;
        assertion.toEqual(result, 4);
    })

    it("Array", async function() {
        const arr = [1,2,3,4];
        expect(arr).toBeElementsArrayOfSize(5);
    })

    it("String Contains", async function() {
        const helloworld = 'helloworldss';
        assertion.toContain(helloworld, 'hello');
    })

    it("Boolean true", async function() {
        const result = 2>5;
        assertion.toEqual(result, false);
    })

    it("Boolean true", async function() {
        const result = 7>5;
        assertion.toEqual(result, true);
    })

})
