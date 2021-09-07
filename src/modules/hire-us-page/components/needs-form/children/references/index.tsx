import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";

const ReferencesWrapper = styled.div`
  
  h2 {
    font-weight: 500;
    margin-bottom: 1em;
  }
  
  ._container {

  }
`;

const ReferencesUI = () => {

    return (
        <ReferencesWrapper id={stepLink.REFERENCES}>
            <h2>References</h2>
            <div className="_container">

            </div>
        </ReferencesWrapper>
    );

}

export default memo(ReferencesUI);