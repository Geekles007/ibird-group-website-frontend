import React, {memo} from "react";
import styled from "styled-components";
import {stepLink} from "../../../../../../constants";

const VisualStyleWrapper = styled.div`
  
  h2 {
    font-weight: 500;
    margin-bottom: 1em;
  }
  
  ._container {

  }
`;

const VisualStyleUI = () => {

    return (
        <VisualStyleWrapper id={stepLink.VISUAL_STYLE}>
            <h2>Visual Style</h2>
            <div className="_container">

            </div>
        </VisualStyleWrapper>
    );

}

export default memo(VisualStyleUI);