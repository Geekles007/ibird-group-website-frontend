import {memo, useEffect} from "react";
import {ComboBox, Dropdown} from "carbon-components-react";
import {BaseModel} from "../../model/BaseModel";
import {FormProps} from "../../modules/hire-us-page/components/needs-form/model/FormProps";
import KeyBuilder from "../../utils/KeyBuilder";

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

    let values: Array<string> = [];

    useEffect(() => {
        if(items && items?.size > 0) {
            values = Array.from(items.keys());
        }
    }, [form, items])

    const onChange = (async (picked: { selectedItem: any | null | undefined }) => {
        if (!picked || !picked.selectedItem) {
            form?.setError(name, {
                message: invalidText
            });
        } else {
            const value = picked.selectedItem;
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
                itemToString={(item: any) => {
                    const elt = (items?.get(item));
                    return elt ? elt.name : "";
                }}
                selectedItem={defaultValue as string}
                onChange={onChange}
                placeholder={placeholder ?? ''}
                titleText={labelText}
            />
        </>
    );

}

export default memo(CustomDropdown);