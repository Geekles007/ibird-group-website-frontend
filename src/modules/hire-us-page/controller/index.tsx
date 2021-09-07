import * as yup from "yup";

class HireUsPageController {

    get MySchema() {
        return yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            slogan: yup.string().required(),
            description: yup.string().required(),
            sectors: yup.string().required(),
        });
    }
}

export default new HireUsPageController();