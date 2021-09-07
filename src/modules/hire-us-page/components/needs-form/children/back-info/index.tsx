import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";

const BackInfoWrapper = styled.div`
  
  h2 {
    font-weight: 500;
    margin-bottom: 1em;
  }
  
  ._container {
    height: 1000px;
  }
`;

const BackInfoUI = () => {

    return (
        <BackInfoWrapper id={stepLink.BACK_INFO}>
            <h2>Background informations</h2>
            <div className="_container">

            </div>
        </BackInfoWrapper>
    );

}

export default memo(BackInfoUI);