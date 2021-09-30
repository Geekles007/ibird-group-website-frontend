import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";
import {TextArea} from "carbon-components-react";
import CustomTextarea from "../../../../../../common/custom-textarea";
import KeyBuilder from "../../../../../../utils/KeyBuilder";
import NeedsFormController from "../../controller";
import {FormProps} from "../../model/FormProps";

const ReferencesWrapper = styled.div`
  margin-bottom: 1em;
  width: 50%;
  
  h2 {
    font-weight: 500;
    margin-bottom: 1em;
  }
  
  ._container {

  }
`;

interface ReferencesUIProps {
    form: FormProps;
}

const ReferencesUI = ({form}: ReferencesUIProps) => {

    return (
        <ReferencesWrapper id={stepLink.REFERENCES}>
            <h2>References</h2>
            <div className="_container">
                <CustomTextarea
                    id={KeyBuilder.build}
                    form={form}
                    name={NeedsFormController.fields.moreDetails}
                    register={form.register}
                    placeholder={"We need to know more, to provide you the best result"}
                    labelText={"Tell us how you imagine your logo, your preferences ..."}
                />
            </div>
        </ReferencesWrapper>
    );

}

export default memo(ReferencesUI);