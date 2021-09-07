import {memo} from "react";
import styled from "styled-components";
import Logo from './../../assets/images/logo.svg';
import {Link} from "react-router-dom";

const HeaderWrapper = styled.div`
  position: absolute;
  margin: 20px 50% 0;
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