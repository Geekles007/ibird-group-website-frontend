import {ISector} from "../../../model/ISector";
import KeyBuilder from "../../../../../../../utils/KeyBuilder";

class BackInfoController {

    sectors: Map<string, ISector> = new Map<string, ISector>([
        [
            KeyBuilder.build,
            {
                id: KeyBuilder.build,
                name: "Agricultural products and services"
            },
        ]
    ]);

    get getSectors() {
        return this.sectors;
    }

}

export default new BackInfoController();