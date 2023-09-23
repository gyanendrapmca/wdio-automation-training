import { config as sharedConfig } from "../wdio.shared.conf";
import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  ...sharedConfig,
  ...{
    specs: ["../../specs/**/*.ts"],
    suites: {
      group1: ["../../specs/assert.spec.ts"],
      group2: ["../../specs/login.spec.ts"],
    },
    capabilities: [
      {
        browserName: "MicrosoftEdge",
        "ms:edgeOptions": {
          args: ["--headless"],
        },
      },
    ],
  },
};
