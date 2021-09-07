import KeyBuilder from "../../../../../utils/KeyBuilder";
import {IStep} from "../index";
import {stepLink} from "../../../../../constants";

class FormStepsController {

    steps: IStep[] = [
        {
            id: KeyBuilder.build,
            name: "Background information",
            description: "We need to have some basic information about your business",
            linkTo: stepLink.BACK_INFO
        },
        {
            id: KeyBuilder.build,
            name: "Visual style",
            description: "Let's talk about your style",
            linkTo: stepLink.VISUAL_STYLE
        },
        {
            id: KeyBuilder.build,
            name: "References",
            description: "Do you have some references to make everything more clear? just upload it :)",
            linkTo: stepLink.REFERENCES
        },
        {
            id: KeyBuilder.build,
            name: "Deliverables",
            description: "Which deliverables do you need?",
            linkTo: stepLink.DELIVERABLES
        },
    ];

    get getSteps() {
        return this.steps;
    }

}

export default new FormStepsController();