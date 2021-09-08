import React, {memo, useState} from "react";
import {Send32} from "@carbon/icons-react";
import {Button, InlineLoading} from "carbon-components-react";
import {FormProps} from "../../model/FormProps";
import {SubmitHandler} from "react-hook-form";
import {IInfo} from "./../../model/IInfo";

interface SubmitHandlerProps {
    form: FormProps;
}

const SubmitButtonHandler = ({form}: SubmitHandlerProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<IInfo> = data => {
        console.log(data);
        form.reset();
    };

    const onErrors = (e: any) => {
        console.log(e);
    }

    const submit = () => {
        setIsLoading(true);
        setTimeout(() => {
            form.handleSubmit(onSubmit, onErrors)();
            setIsLoading(false)
        }, 2000);
    }

    return (
        <>
            <Button onClick={submit} className={"saving-button"} renderIcon={isLoading ? null : Send32} kind={"secondary"} >
                {
                    !isLoading ?
                        <>
                            <strong>Send</strong>
                            <p>Just let us do the rest :)</p>
                        </> : <InlineLoading className={"in-loading"} description={"Saving in progress ..."} />
                }
            </Button>
        </>
    );

}

export default memo(SubmitButtonHandler);