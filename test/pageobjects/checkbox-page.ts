import Page from "./page";

class checkbox extends Page {

    public open() {
        return super.open('/checkboxes');
    }

}

export default new checkbox();
