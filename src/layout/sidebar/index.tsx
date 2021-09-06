import React, {memo} from "react";
import {SidebarWrapper} from "./style/default";

const SidebarUI: React.FC<{}> = () => {

    return (
        <SidebarWrapper>
            Sidebar
        </SidebarWrapper>
    );

}

export default memo(SidebarUI);