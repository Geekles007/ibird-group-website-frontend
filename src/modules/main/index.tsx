import React, {memo} from "react";
import {Route} from "react-router-dom";
import BodyUI from "../body";
import HireUsPage from "../hire-us-page";

const MainUI = () => {

    return (
        <>
            <Route path={"/"} component={BodyUI} exact/>
            <Route path={"/hire-us"} component={HireUsPage}/>
        </>
    );

}

export default memo(MainUI);
