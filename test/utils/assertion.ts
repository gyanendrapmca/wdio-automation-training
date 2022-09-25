import { logs } from "./logs";

class Assertion {
    
    toContain(actual: string | string[] | number | number[], expected: string | number) {
        expect(actual).toContain(expected)
        logs(`Assertion >> ${actual} to contain ${expected}`);
    }

    toEqual(actual:string | number | boolean, expected:string | number | boolean) {
        expect(actual).toEqual(expected)
        logs(`Assertion >> ${actual} to equal ${expected}`)
    }
}

export default new Assertion();
