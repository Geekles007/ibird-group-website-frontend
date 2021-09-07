import React, {memo} from "react";
import {HireUsPageWrapper} from "./style/default";
import Banner from "./components/banner";
import FormStepUI from "./components/form-step";
import NeedsFormUI from "./components/needs-form";
import {RouteComponentProps, useRouteMatch, withRouter} from "react-router-dom";

/*
This page will look exactly like 99designs contest's details page
 */

interface HireUsPageProps {

}

const HireUsPage = ({}: HireUsPageProps) => {

    return (
        <HireUsPageWrapper>
            <Banner />
            <div className="form-container">
                <FormStepUI />
                <NeedsFormUI />
            </div>
        </HireUsPageWrapper>
    );

}

export default memo(HireUsPage);
