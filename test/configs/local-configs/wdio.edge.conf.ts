import { config as sharedConfig } from '../wdio.shared.conf';

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'MicrosoftEdge',
            "ms:edgeOptions": {
                args: ["--headless"]
            }
        }],
        services: ['selenium-standalone']
    }
}