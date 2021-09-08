import {memo} from "react";
import {FormProps} from "../../modules/hire-us-page/components/needs-form/model/FormProps";
import {TextArea} from "carbon-components-react";
import KeyBuilder from "../../utils/KeyBuilder";

interface CustomTextareaProps {
    helperText?: string;
    id: string;
    register: any;
    defaultValue?: string;
    name: string;
    invalidText?: string;
    labelText: string | JSX.Element;
    placeholder?: string;
    form: FormProps;
}

const CustomTextarea = (input: CustomTextareaProps) => {

    const onChange = (e: any) => {
        input.form.setValue(input.name, e.target.value);
    }

    return (
        <>
            <TextArea
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

export default memo(CustomTextarea);