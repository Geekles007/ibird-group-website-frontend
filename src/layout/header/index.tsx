import {memo} from "react";
import styled, {css} from "styled-components";
import Logo from './../../assets/images/logo.svg';
import {Link} from "react-router-dom";
import {device, size} from "../../constants";

const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  z-index: 9;

  img {
    height: 2.5em;
  }

  a {
    color: #000;
  }
`;

const HeaderUI: React.FC<{}> = () => {

    return (
        <HeaderWrapper>
            <Link to="/">
                <img src={Logo} alt="iBIRD Design logo"/>
            </Link>
        </HeaderWrapper>
    );

}

export default memo(HeaderUI);