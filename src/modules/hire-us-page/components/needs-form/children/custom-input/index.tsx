import React, {memo} from "react";
import KeyBuilder from "../../../../../../utils/KeyBuilder";
import {TextInput} from "carbon-components-react";
import {FormProps} from "../../model/FormProps";

interface CustomInpuProps {
    helperText?: string;
    type: string;
    id: string;
    register: any;
    defaultValue?: string;
    name: string;
    invalidText?: string;
    labelText: string | JSX.Element;
    placeholder?: string;
    invalid?: string;
    form: FormProps;
}

const CustomInput = (input: CustomInpuProps) => {

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
                invalid={input?.invalid ? input.form?.errors[input?.invalid] !== undefined : false}
            />
        </>
    );

}

export default memo(CustomInput);