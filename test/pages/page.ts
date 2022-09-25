import { data } from "../env/data";
import { logs } from "../utils/logs";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        logs(`Navigated url: ${data.baseUrl}${path}`);
        return browser.url(`${data.baseUrl}${path}`);
    }
}
