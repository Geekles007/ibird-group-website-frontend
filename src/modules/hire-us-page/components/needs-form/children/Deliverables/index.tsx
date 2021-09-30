import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";
import CustomDropdown from "../../../../../../common/custom-dropdown";
import BackInfoController from "../back-info/controller";
import NeedsFormController from "../../controller";
import {FormProps} from "../../model/FormProps";
import CustomTextarea from "../../../../../../common/custom-textarea";
import KeyBuilder from "../../../../../../utils/KeyBuilder";

const DeliverablesWrapper = styled.div`
  margin-bottom: 1em;
  width: 50%;
  
  h2 {
    font-weight: 500;
    margin-bottom: 1em;
  }
  
  ._container {

  }
`;

interface DeliverablesUIProps {
    form: FormProps
}

const DeliverablesUI = ({form}: DeliverablesUIProps) => {

    return (
        <DeliverablesWrapper id={stepLink.DELIVERABLES}>
            <h2>Deliverables</h2>
            <div className="_container">
                <div className="form-control">
                    <CustomDropdown
                        items={BackInfoController.getSectors}
                        required={false}
                        form={form}
                        objectProperty={"name"}
                        name={NeedsFormController.fields.extensions}
                        placeholder={"Which screen quality do you need?"}
                        labelText={"Which screen quality do you need?"}
                    />
                </div>
                <div className="form-control">
                    <CustomTextarea
                        id={KeyBuilder.build}
                        form={form}
                        name={NeedsFormController.fields.deliverablesDetails}
                        register={form.register}
                        placeholder={"Details about deliverables"}
                        labelText={"Details about deliverables"}
                    />
                </div>
            </div>
        </DeliverablesWrapper>
    );

}

export default memo(DeliverablesUI);