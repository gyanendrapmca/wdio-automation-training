import { config as sharedConfig } from "../wdio.shared.conf";

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: "firefox",
        "moz:firefoxOptions": {
          args: ["--headless"],
        },
      },
    ],
    services: ["selenium-standalone"],
  },
};
