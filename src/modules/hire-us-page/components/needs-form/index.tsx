import {memo} from "react";
import styled from 'styled-components';
import {Form} from "carbon-components-react";
import BackInfoUI from "./children/back-info";
import VisualStyleUI from "./children/visual-style";
import ReferencesUI from "./children/references";
import DeliverablesUI from "./children/Deliverables";
import {FormProps} from "./model/FormProps";

const NeedsFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-left: 2em;
`;

interface NeedsFormUIProps {
    form: FormProps;
}

const NeedsFormUI = ({form}: NeedsFormUIProps) => {

    return (
        <NeedsFormWrapper>
            <BackInfoUI form={form} />
            <VisualStyleUI />
            <ReferencesUI />
            <DeliverablesUI />
        </NeedsFormWrapper>
    );

}

export default memo(NeedsFormUI);