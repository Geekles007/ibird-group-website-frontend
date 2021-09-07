import {memo} from "react";
import styled from 'styled-components';
import {Form} from "carbon-components-react";

const NeedsFormWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 2em;
  
  h2 {
    
  }
`;

const NeedsFormUI = () => {

    return (
        <NeedsFormWrapper>
            <Form>
                
            </Form>
        </NeedsFormWrapper>
    );

}

export default memo(NeedsFormUI);