import {memo, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import FormStepsController from "./controller";
import StepCardUI from "./children/step-card";
import {stepLink} from "../../../../constants";
import {FormProps} from "../needs-form/model/FormProps";
import SubmitButtonHandler from "../needs-form/children/submit-handler";

export interface IStep {
    id: string;
    name: string;
    description?: string;
    linkTo?: string;
}

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0 1em;
  
  position: sticky;
  position: -webkit-sticky;
  top: 1em;
  
  align-self: flex-start;
  
  .saving-button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4em;

    .bx--inline-loading__text {
      color: #fff !important;
    }
  }
`;

interface FormStepUIProps {
    form: FormProps;
}

const FormStepUI = ({form}: FormStepUIProps) => {

    const [current, setCurrent] = useState<string>("");

    const setCurrentStep = useCallback((linkTo: string) => {
        setCurrent(item => linkTo ?? "");
    }, [setCurrent]);

    useEffect(() => {
        setCurrent(item => window.location.href.split("#")[1] ?? stepLink.BACK_INFO);
    }, [setCurrent])

    return (
        <StepsWrapper>
            <>
                {
                    FormStepsController.getSteps.map((step: IStep) => {
                        return (
                            <StepCardUI
                                current={current === step.linkTo}
                                action={() => setCurrentStep(step.linkTo ?? "")}
                                step={step} key={step.id}/>
                        );
                    })
                }
            </>
            <SubmitButtonHandler form={form} />
        </StepsWrapper>
    );

}

export default memo(FormStepUI);