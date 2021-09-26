import React, {memo, useCallback, useState} from "react";
import {FormProps} from "../../../../model/FormProps";
import StyleAttributeItem from "./children/StyleAttributeItem";

interface StyleAttributeHandlerProps {
    form: FormProps;
}

const StyleAttributeHandler = ({form}: StyleAttributeHandlerProps) => {

    const [attributes, setAttributes] = useState<any>({});

    const onChangeHandler = useCallback(async (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setAttributes((old: any) => {
            const value = {
                ...old,
                [name]: event.target.value
            };
            form.setValue("styleAttributes", value);
            return value;
        })
    }, [setAttributes])

    return (
        <>
            <StyleAttributeItem form={form} title={"Elegant"} name={"elegant"} onChangeHandler={onChangeHandler}/>
            <StyleAttributeItem form={form} title={"Luxurious"} name={"luxurious"} onChangeHandler={onChangeHandler}/>
            <StyleAttributeItem form={form} title={"Masculine"} name={"masculine"} onChangeHandler={onChangeHandler}/>
            <StyleAttributeItem form={form} title={"Feminine"} name={"feminine"} onChangeHandler={onChangeHandler}/>
            <StyleAttributeItem form={form} title={"Sophisticated"} name={"sophisticated"} onChangeHandler={onChangeHandler}/>
            <StyleAttributeItem form={form} title={"Organic"} name={"organic"} onChangeHandler={onChangeHandler}/>
            <StyleAttributeItem form={form} title={"Literal"} name={"literal"} onChangeHandler={onChangeHandler}/>
        </>
    );

}

export default memo(StyleAttributeHandler);
