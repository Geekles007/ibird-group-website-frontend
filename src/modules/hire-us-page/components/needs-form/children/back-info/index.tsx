import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";
import NeedsFormController from './../../controller';
import KeyBuilder from "../../../../../../utils/KeyBuilder";
import {Tooltip} from "carbon-components-react";
import CustomInput from "../custom-input";
import {FormProps} from "../../model/FormProps";

const BackInfoWrapper = styled.div`
  margin-bottom: 1em;

  h2 {
    font-weight: 500;
    bottom: .5em;
  }

  ._container {
    
  }
`;

interface BackInfoUIProps {
    form: FormProps;
}

const BackInfoUI = ({form}: BackInfoUIProps) => {

    return (
        <BackInfoWrapper id={stepLink.BACK_INFO}>
            <h2>Background informations</h2>
            <div className="_container">
                <div className={"form-control"}>
                    <CustomInput
                        id={KeyBuilder.build}
                        type={"email"}
                        helperText={""}
                        form={form}
                        name={NeedsFormController.fields.email}
                        register={form.register}
                        placeholder={"Enter your email"}
                        labelText={<Tooltip
                            direction="bottom"
                            tabIndex={0}
                            triggerText="Email"
                        >
                            <p>
                                We will use it to contact you. So make sure to use the good one :)
                            </p>
                        </Tooltip>}
                    />
                </div>
                <div className="form-control">
                    <CustomInput
                        id={KeyBuilder.build}
                        type={"text"}
                        helperText={""}
                        form={form}
                        name={NeedsFormController.fields.name}
                        register={form.register}
                        placeholder={"Enter the name"}
                        labelText={"Name to incorporate in the logo"}
                    />
                </div>
            </div>
        </BackInfoWrapper>
    );

}

export default memo(BackInfoUI);