import Page from "./page";

class ContextMenuPage extends Page {

    public open() {
        return super.open('/context_menu');
    }

}

export default new ContextMenuPage();