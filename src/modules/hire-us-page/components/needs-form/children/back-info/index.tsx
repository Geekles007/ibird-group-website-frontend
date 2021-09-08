import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";
import NeedsFormController from './../../controller';
import KeyBuilder from "../../../../../../utils/KeyBuilder";
import {Tooltip} from "carbon-components-react";
import CustomInput from "../../../../../../common/custom-input";
import {FormProps} from "../../model/FormProps";
import CustomTextarea from "../../../../../../common/custom-textarea";
import CustomDropdown from "../../../../../../common/custom-dropdown";
import BackInfoController from './controller';

const BackInfoWrapper = styled.div`
  margin-bottom: 1em;
  width: 50%;

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
                        invalidText={"Your email is required"}
                        labelText={<Tooltip
                            direction="bottom"
                            tabIndex={0}
                            triggerText="Email *"
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
                        invalidText={"The name is very important"}
                        labelText={"Name to incorporate in the logo *"}
                    />
                </div>
                <div className="form-control">
                    <CustomInput
                        id={KeyBuilder.build}
                        type={"text"}
                        helperText={"If you don't have any, you can just write this 'N/A'"}
                        form={form}
                        name={NeedsFormController.fields.slogan}
                        register={form.register}
                        placeholder={"Enter your slogan"}
                        labelText={"Slogan to incorporate in the logo"}
                    />
                </div>
                <div className="form-control">
                    <CustomTextarea
                        id={KeyBuilder.build}
                        form={form}
                        name={NeedsFormController.fields.description}
                        register={form.register}
                        placeholder={"Enter your slogan"}
                        labelText={"Tell us more about your business"}
                    />
                </div>
                <div className="form-control">
                    <CustomDropdown
                        items={BackInfoController.getSectors}
                        required={false}
                        form={form}
                        objectProperty={"name"}
                        name={NeedsFormController.fields.sector}
                        placeholder={"What is your sector ?"}
                        labelText={"What is your sector ?"}
                    />
                </div>
            </div>
        </BackInfoWrapper>
    );

}

export default memo(BackInfoUI);