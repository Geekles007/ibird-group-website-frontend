import {memo} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {size} from "../../../../constants";
import {Button} from "carbon-components-react";

const HireWrapper = styled.div`
  height: 60px;
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
    margin-right: 1em;
  }

  button {
    height: 100%;
    width: 100px;
    bordeR: none;
    background-color: ${({theme}) => theme.accentColor};
    font-weight: 700;
    font-size: .9em;
    border-radius: .2em;

    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    
    text-decoration: none;

    cursor: pointer;
  }
    
  @media (max-width: ${size.tablet}) {
  
    &{
        
    }

    p {
        display: none;
    }
  }
`;

const HireUsUI: React.FC<{}> = () => {

    const scrollToEnd = () => {
        window.scrollTo(0,document.body.scrollHeight);
    }

    return (
        <HireWrapper>
            <p>We can't wait to make our creativity <br/>
                and passion at your service </p>
            <button onClick={scrollToEnd} type={"button"}>HIRE US</button>
        </HireWrapper>
    );

}

export default memo(HireUsUI);