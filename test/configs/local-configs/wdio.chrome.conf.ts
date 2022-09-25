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
  },
};
