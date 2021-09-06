import React from 'react';
import './App.css';
import MainUI from "./modules/main";
import {Switch} from "react-router-dom";
import HeaderUI from "./layout/header";
import styled from "styled-components";
import ThemeStore from "./store/ThemeStore";
import {Provider} from "mobx-react";
import DialogStore from "./common/modal-module/store/DialogStore";
import ModalUI from "./common/modal-module";

const AppWrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

function App() {
    return (
        <Provider
            ThemeStore={ThemeStore}
            DialogStore={DialogStore}
        >
            <AppWrapper>
                <HeaderUI />
                <Switch>
                    <MainUI />
                    <ModalUI />
                </Switch>
            </AppWrapper>
        </Provider>
    );
}

export default App;
