import {memo, useEffect, useState} from "react";
import {ComboBox, Dropdown} from "carbon-components-react";
import {BaseModel} from "../../model/BaseModel";
import {FormProps} from "../../modules/hire-us-page/components/needs-form/model/FormProps";
import KeyBuilder from "../../utils/KeyBuilder";
import {ISector} from "../../modules/hire-us-page/components/needs-form/model/ISector";

interface CustomDropdownProps<T extends BaseModel> {
    items: Map<string, T>;
    form: FormProps;
    objectProperty: string;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    required: boolean,
    labelText: string;
    invalidText?: string;
}

const CustomDropdown = <V extends BaseModel>({
                                                 items,
                                                 invalidText,
                                                 name,
                                                 labelText,
                                                 placeholder,
                                                 form,
                                                 defaultValue,
                                                 required,
                                                 objectProperty
                                             }: CustomDropdownProps<V>) => {

    const [values, setValues] = useState<Array<ISector>>([]);

    useEffect(() => {
        if(items && items?.size > 0) {
            setValues(() => Array.from(items.values()));
        }
        console.log(values);
    }, [setValues]);

    const onChange = (async (picked: { selectedItem: any | null | undefined }) => {
        if (!picked || !picked.selectedItem) {
            form?.setError(name, {
                message: invalidText
            });
        } else {
            const value = picked.selectedItem?.id;
            form?.setValue(name, value);
        }
    })

    return (
        <>
            <ComboBox
                ariaLabel="ComboBox"
                id={KeyBuilder.build}
                invalidText={invalidText}
                invalid={form?.errors ? form?.errors[name] !== undefined : false}
                name={name}
                items={values}
                selectedItem={defaultValue as string}
                onChange={onChange}
                placeholder={placeholder ?? ''}
                titleText={labelText}
            />
        </>
    );

}

export default memo(CustomDropdown);
