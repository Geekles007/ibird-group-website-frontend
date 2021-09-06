import {memo} from "react";
import styled from "styled-components";
import Logo from './../../assets/images/logo.svg';
import {Menu20} from "@carbon/icons-react";

const HeaderWrapper = styled.div`
    position: absolute;
    margin: 20px 50% 0;
    
    img{
        height: 2.5em;
    }
    
    a{
        color: #000;
    }
`;

const HeaderUI: React.FC<{}> = () => {

    return (
        <HeaderWrapper>
            <a href="#">
                <img src={Logo} alt="iBIRD Design logo"/>
            </a>
        </HeaderWrapper>
    );

}

export default memo(HeaderUI);