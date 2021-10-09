import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";
import {FormProps} from "../../model/FormProps";
import ColorPickerUI from "./components/color-picker";
import StyleAttributeHandler from "./components/StyleAttributeHandler";

const VisualStyleWrapper = styled.div`
  margin-bottom: 1em;
  width: 50%;
  
  h2 {
    font-weight: 500;
    margin-bottom: 1em;
  }
  
  ._container {
    
    
  }
`;

interface VisualStyleUIProps {
    form: FormProps;
}

// TODO Put some details about each fields to make it easier to understand. (Like tooltips for example on each label)

const VisualStyleUI = ({form}: VisualStyleUIProps) => {

    return (
        <VisualStyleWrapper id={stepLink.VISUAL_STYLE}>
            <h2>Visual Style</h2>
            <div className="_container">
                <div className={"form-control"}>
                    <label htmlFor="color">Make a color palette.</label>
                    <ColorPickerUI form={form}/>
                </div>
                <div className={"form-control"}>
                    <label htmlFor="color">Style attributes</label>
                    {/*<StyleAttributeHandler form={form} />*/}
                    {/* TODO We will rebuilt it fromscratch */}
                </div>
            </div>
        </VisualStyleWrapper>
    );

}

export default memo(VisualStyleUI);
