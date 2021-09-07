import React, {memo} from "react";
import {HireUsPageWrapper} from "./style/default";
import Banner from "./components/banner";
import FormStepUI from "./components/form-step";
import NeedsFormUI from "./components/needs-form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import HireUsPageController from "./controller";
import FooterUI from "../../layout/footer";

/*
This page will look exactly like 99designs contest's details page
 */

const HireUsPage = () => {
    const form: any = useForm({
        resolver: yupResolver(HireUsPageController.MySchema)
    });

    const onSubmit = (data: any) => {
        console.log(data)
    };

    return (
        <HireUsPageWrapper>
            <Banner />
            <form onSubmit={form.handleSubmit(onSubmit)} className="form-container">
                <FormStepUI form={form} />
                <NeedsFormUI form={form} />
            </form>
            <FooterUI />
        </HireUsPageWrapper>
    );

}

export default memo(HireUsPage);
