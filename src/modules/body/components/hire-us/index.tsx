import {memo} from "react";
import styled from "styled-components";
import {Button} from "carbon-components-react";
import DialogStore from "../../../../common/modal-module/store/DialogStore";

const HireWrapper = styled.div`
    height: 60px;
    width: 30em;
    max-width: 30em;
    background-color: #000;
    border-radius: .2em;
    z-index: 99;
    
    position: absolute;
    bottom: 20px;
    right: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 10px;
    
    p {
        color: #fff;
        font-weight: 500;
        font-size: 1em;
    }
    
    button{
        height: 100%;
        width: 100px;
        bordeR: none;
        background-color: ${({theme}) => theme.accentColor};
        font-weight: 700;
        font-size: .9em;
        border-radius: .2em;
        
        cursor: pointer;
    }
`;

const HireUsUI: React.FC<{}> = () => {

    const openForm = () => {
        DialogStore.setInfos({
            content: <>Form</>,
            title: "Let us amaze you! :)",
            size: "sm"
        });
        DialogStore.setOpen(true);
    }

    return (
        <HireWrapper>
            <p>We can't wait to make our creativity <br/>
                and passion at your service </p>
            <button type={"button"} onClick={openForm}>HIRE US</button>
        </HireWrapper>
    );

}

export default memo(HireUsUI);