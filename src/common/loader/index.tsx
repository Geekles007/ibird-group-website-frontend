import React, {memo} from "react";
import Logo from './../../assets/images/logo.svg';
import styled, {keyframes} from "styled-components";

const Bounce = keyframes`
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0.9);
  }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  img {
    height: 50px;
    animation: ${Bounce} .5s 0s ease-in-out infinite;
  }
`;

const LoaderUI: React.FC = () => {

    return (
        <LoaderWrapper>
            <img src={Logo} alt="IBIRD design's logo"/>
        </LoaderWrapper>
    );

}

export default memo(LoaderUI);