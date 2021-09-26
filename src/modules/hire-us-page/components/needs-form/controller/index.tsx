import {IInfo} from "../model/IInfo";

class NeedsFormController {

    private readonly SEND_MY_INFO_FIELDS: IInfo = {
        name: "name",
        email: "email",
        description: "description",
        sector: "sector",
        slogan: "slogan",
        colors: "colors",
        styleAttributes: "styleAttributes"
    };


    get fields() {
        return this.SEND_MY_INFO_FIELDS;
    }
}

export default new NeedsFormController();
