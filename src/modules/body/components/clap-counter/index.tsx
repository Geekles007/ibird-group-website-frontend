import {memo, useCallback, useState} from "react";
import styled, {keyframes} from "styled-components";
import clapper from './../../../../assets/icons/clapping.png';
import {TooltipDefinition} from "carbon-components-react";

const bomb = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
`;

const ClapWrapper = styled.a`
    width: 4.5em;
    height: 4.5em;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    bottom: 20px;
    left: 20px;
    
    .tooltip {
        position: absolute;
        left: 0;
        top: 0;
        width: 15em;
        padding: 10px;
        background-color: #000;
        color: #fff;
        font-size: .9em;
        
        transform: translateY(0px);
        opacity: 0;
        
        transition: all .3s 0s ease-in-out;
    }
    
    &:hover{
        .tooltip {
            transform: translateY(-50px);
            opacity: 1;
        }
    }
    
    &:after {
        width: 4em;
        height: 4em;
        background-color: #fff;
        content: "";
        display: block;
        border-radius: 50%;
        
        animation: ${bomb} .5s 0s infinite;
        z-index: 1;
    }
    
    img {
        position: absolute;
        width: 60px;
        right: -20px;
        bottom: -5px;
        z-index: 8;
        transition: all .2s 0s ease-in-out;
        transform: scale(1);
    }
    
    &:active {
        img {
            transform: scale(.8);
        }
    }
    
    .count {
        position: absolute;
        min-width: 25px;
        height: 25px;
        background-color: #000;
        border-radius: 100px;
        left: 0;
        top: 0;
        padding: 0 5px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-weight: 500;
        color: #fff;
        font-size: .8em;
        z-index: 9;
    }
`;

const ClapCounter: React.FC<{}> = () => {
    const [counter, setCounter] = useState<number>(0);

    const countIt = useCallback(() => {
        setCounter(counter + 1);
    }, [counter])

    return (
        <ClapWrapper onClick={countIt}>
            <span className={"count"}>{counter}</span>
            <img src={clapper} alt="Clap icon"/>
            <div className="tooltip">
                Tell us how much you like our website :)
            </div>
        </ClapWrapper>
    );

}

export default memo(ClapCounter);
