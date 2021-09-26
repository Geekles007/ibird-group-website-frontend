import React, {memo} from "react";
import {FormProps} from "../../../../../../model/FormProps";
import "./style/default.scss";

interface StyleAttributeItemProps {
    form: FormProps;
    title?: string;
    name: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const StyleAttributeItem = ({form, title, name, onChangeHandler}: StyleAttributeItemProps) => {

    return (
        <div className={"item-wrapper"}>
            <span className={"item_title"}>{title}</span>
            <div id="debt-amount-slider">
                <input type="radio" name={name} onChange={(e) => onChangeHandler(e, name)} id={`${name}1`} value="1" required/>
                <label htmlFor={`${name}1`} data-debt-amount="😕 1"></label>
                <input type="radio" name={name} onChange={(e) => onChangeHandler(e, name)} id={`${name}2`} value="2" required/>
                <label htmlFor={`${name}2`} data-debt-amount="🙂 2"></label>
                <input type="radio" name={name} onChange={(e) => onChangeHandler(e, name)} id={`${name}3`} value="3" required/>
                <label htmlFor={`${name}3`} data-debt-amount="🥳 3"></label>
                <input type="radio" name={name} onChange={(e) => onChangeHandler(e, name)} id={`${name}4`} value="4" required/>
                <label htmlFor={`${name}4`} data-debt-amount="😍 4"></label>
                <input type="radio" name={name} onChange={(e) => onChangeHandler(e, name)} id={`${name}5`} value="5" required/>
                <label htmlFor={`${name}5`} data-debt-amount="🤩 5"></label>
                <div id="debt-amount-pos"></div>
            </div>
        </div>
    );

}

export default memo(StyleAttributeItem);
