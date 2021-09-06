import {memo} from "react";
import {HomeWrapper} from "./style/default";
import heart from './../../assets/icons/heart.png';
import SocialLinksUI from "./components/social-links";
import GoDownButton from "./components/go-down-button";
import HireUsUI from "./components/hire-us";
import {ThemeProvider} from "styled-components";
import ThemeStore from "../../store/ThemeStore";
import ClapCounter from "./components/clap-counter";
import Illustrated from "./components/illustrated";
import GalleryPortfolio from "./components/gallery-portofolio";
import FooterUI from './../../layout/footer'

const BodyUI: React.FC<{}> = () => {

    return (
        <ThemeProvider theme={ThemeStore.CurrentTheme}>
            <HomeWrapper>
                <div className="designed">Designed with <img src={heart} alt={"heart illustration"} /> by <strong>iBIRD Design</strong></div>
                <SocialLinksUI/>
                <GoDownButton />
                <HireUsUI />
                <ClapCounter />
                <Illustrated />
            </HomeWrapper>
            <GalleryPortfolio />
            <FooterUI />
        </ThemeProvider>
    );

}

export default memo(BodyUI);
