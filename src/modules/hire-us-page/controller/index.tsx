import * as yup from "yup";

class HireUsPageController {

    get MySchema() {
        return yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            slogan: yup.string(),
            description: yup.string().required(),
            sector: yup.string(),
        });
    }
}

export default new HireUsPageController();