import {memo, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import FormStepsController from "./controller";
import StepCardUI from "./children/step-card";
import {stepLink} from "../../../../constants";

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
  background-color: #eee;
  padding: 1em;
`;

const FormStepUI = () => {

    const [current, setCurrent] = useState<string>("");

    const setCurrentStep = useCallback((linkTo: string) => {
        setCurrent(item => linkTo ?? "");
    }, [setCurrent]);

    useEffect(() => {
        setCurrent(item => window.location.href.split("#")[1] ?? stepLink.BACK_INFO);
    }, [setCurrent])

    return (
        <StepsWrapper>
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
        </StepsWrapper>
    );

}

export default memo(FormStepUI);