import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  filter: blur(4px);
  z-index: 999;
`;

export {
    ModalContainer
}