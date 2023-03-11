import { config as sharedConfig } from "../wdio.shared.conf";

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    services: ["chromedriver"],
    capabilities: [
      {
        maxInstances: 3,
        browserName: "chrome",
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
          args: [
            '--headless'
          ]
        }
      },
    ],

    suites: {
      group1: ["./test/specs/assert.spec.ts"],
      group2: ["./test/specs/login.spec.ts"],
    },
  },
};
