import React, {memo} from "react";
import {HireUsPageWrapper} from "./style/default";
import Banner from "./components/banner";
import {ProgressIndicator, ProgressStep, Tooltip} from "carbon-components-react";

/*
This page will look exactly like 99designs contest's details page
 */

interface HireUsPageProps {

}

const HireUsPage = ({}: HireUsPageProps) => {

    return (
        <HireUsPageWrapper>
            <Banner />
            <ProgressIndicator currentIndex={1}>
                <ProgressStep
                    label="First step"
                    description="Step 1: Getting started with Carbon Design System"
                />
                <ProgressStep
                    current
                    label="Second step with tooltip"
                    description="Step 2: Getting started with Carbon Design System"
                    renderLabel={() => (
                        <Tooltip
                            direction="bottom"
                            showIcon={false}
                            triggerClassName="bx--progress-label"
                            triggerText="Second step with tooltip"
                            tooltipId="tooltipId-0">
                            <p>Second step with tooltip</p>
                        </Tooltip>
                    )}
                />
                <ProgressStep
                    label="Third step"
                    description="Step 3: Getting started with Carbon Design System"
                    secondaryLabel="Optional label"
                />
                <ProgressStep
                    invalid
                    label="Fourth step"
                    description="Step 4: Getting started with Carbon Design System"
                />
                <ProgressStep
                    disabled
                    label="Fifth step"
                    description="Step 5: Getting started with Carbon Design System"
                />
            </ProgressIndicator>
        </HireUsPageWrapper>
    );

}

export default memo(HireUsPage);
