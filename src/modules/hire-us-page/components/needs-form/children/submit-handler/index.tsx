import React, {memo} from "react";
import {Send32} from "@carbon/icons-react";
import {Button} from "carbon-components-react";
import {FormProps} from "../../model/FormProps";

interface SubmitHandlerProps {
    form: FormProps;
}

const SubmitButtonHandler = ({form}: SubmitHandlerProps) => {

    return (
        <>
            <Button type={"submit"} className={"saving-button"} renderIcon={Send32} kind={"secondary"} >
                <strong>Send</strong>
                <p>Just let us do the rest :)</p>
            </Button>
        </>
    );

}

export default memo(SubmitButtonHandler);