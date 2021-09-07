import {memo} from "react";
import styled from 'styled-components';
import {Form} from "carbon-components-react";
import BackInfoUI from "./children/back-info";
import VisualStyleUI from "./children/visual-style";
import ReferencesUI from "./children/references";
import DeliverablesUI from "./children/Deliverables";

const NeedsFormWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 2em;
`;

const NeedsFormUI = () => {

    return (
        <NeedsFormWrapper>
            <Form>
                <BackInfoUI />
                <VisualStyleUI />
                <ReferencesUI />
                <DeliverablesUI />
            </Form>
        </NeedsFormWrapper>
    );

}

export default memo(NeedsFormUI);