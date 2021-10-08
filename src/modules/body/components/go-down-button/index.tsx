import {memo} from "react";
import ArrowDown from './../../../../assets/icons/down-arrow.png';
import styled, {keyframes} from "styled-components";
import {size} from "../../../../constants";

const goDownAnimated = keyframes`
    0% {
        bottom: 20px;
    }
    50% {
        bottom: 30px;
    }
    100% {
        bottom: 20px;
    }
`;

const GoDownWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    margin: 0 50%;
    
    animation: ${goDownAnimated} .7s 0s infinite;
    
    img{
        width: 2.5em;
    }
    
  @media (max-width: ${size.laptop}) {
    display: none; 
  }
`;

const GoDownButton: React.FC<{}> = () => {

    return (
        <GoDownWrapper>
            <a href="#"><img src={ArrowDown} alt={"arrow down"} /></a>
        </GoDownWrapper>
    );

}

export default memo(GoDownButton);