import React, { memo } from "react"
import { inject, observer } from "mobx-react";
import { ModalContainer } from './modal-style/default';
import DialogStore from "./store/DialogStore";
import ModalComposed from "./components/modal-composed";
import HeaderModal from "./components/header-modal";

const ModalUI: React.FC<{}> = observer(() => {

    const closeModal = () => {
        DialogStore.setOpen(false);
    }

    return (
        <ModalContainer>
            <ModalComposed size={DialogStore.options.size} open={DialogStore.open} onClose={closeModal}>
                <HeaderModal label={DialogStore.options.title}/>
                {DialogStore.options.content}
            </ModalComposed>
        </ModalContainer>
    );
})

export default (inject('DialogStore'))(memo(ModalUI));