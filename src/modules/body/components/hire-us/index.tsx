import {memo} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {size} from "../../../../constants";

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

  a {
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

    return (
        <HireWrapper>
            <p>We can't wait to make our creativity <br/>
                and passion at your service </p>
            <Link to={"#hire-us"} type={"button"}>HIRE US</Link>
        </HireWrapper>
    );

}

export default memo(HireUsUI);