import React, {memo} from "react";
import KeyBuilder from "../../utils/KeyBuilder";
import {TextInput} from "carbon-components-react";
import {FormProps} from "../../modules/hire-us-page/components/needs-form/model/FormProps";

interface CustomInputProps {
    helperText?: string;
    type: string;
    id: string;
    register?: any;
    defaultValue?: string;
    name: string;
    invalidText?: string;
    labelText: string | JSX.Element;
    placeholder?: string;
    form: FormProps;
}

const CustomInput = (input: CustomInputProps) => {

    const onChange = (e: any) => {
        input.form.setValue(input.name, e.target.value);
    }

    return (
        <>
            <TextInput
                type={input.type}
                helperText={input.helperText}
                id={input.id ?? KeyBuilder.build}
                onChange={onChange}
                defaultValue={input.defaultValue as string}
                name={input.name}
                invalidText={input.invalidText}
                labelText={input.labelText}
                placeholder={input.placeholder}
                invalid={input?.form?.errors ? input.form?.errors[input.name] !== undefined : false}
            />
        </>
    );

}

export default memo(CustomInput);