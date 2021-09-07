import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";

const DeliverablesWrapper = styled.div`
  
  h2 {
    font-weight: 500;
    margin-bottom: 1em;
  }
  
  ._container {

  }
`;

const DeliverablesUI = () => {

    return (
        <DeliverablesWrapper id={stepLink.DELIVERABLES}>
            <h2>Deliverables</h2>
            <div className="_container">

            </div>
        </DeliverablesWrapper>
    );

}

export default memo(DeliverablesUI);