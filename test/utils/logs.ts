import AllureReporter from "@wdio/allure-reporter";

export const logs= (steps: string) => {
    AllureReporter.addStep(`TEST: ${steps}`);
    console.log(`TEST: ${steps}`);
}