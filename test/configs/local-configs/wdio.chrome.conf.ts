import { config as sharedConfig } from "../wdio.shared.conf";
import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
  ...sharedConfig,
  ...{
    specs: ["../../specs/**/*.ts"],
    suites: {
      group1: ["../../specs/assert.spec.ts"],
      group2: ["../../specs/login.spec.ts"],
    },
    services: ["chromedriver"],
    capabilities: [
      {
        maxInstances: 3,
        browserName: "chrome",
        acceptInsecureCerts: true,
        "goog:chromeOptions": {
          args: [
            '--headless'
          ]
        },
      },
    ],

  },
};
