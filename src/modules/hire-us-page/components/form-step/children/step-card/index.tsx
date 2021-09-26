import React, {memo} from "react";
import {IStep} from "../../index";
import {StepCardWrapper} from "./style/default";

interface StepCardProps{
    step: IStep;
    current: boolean;
    action: () => void;
}

const StepCardUI = ({step, current, action}: StepCardProps) => {

    return (
        <StepCardWrapper current={current} onClick={action} href={`#${step.linkTo}`}>
            <strong>{step.name}</strong>
            <p>{step.description}</p>
        </StepCardWrapper>
    );

}

export default memo(StepCardUI);
