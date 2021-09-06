import {memo} from "react";

import Part1 from './../../../../assets/illustrations/part1.png';
import Part2 from './../../../../assets/illustrations/part2.png';
import Part3 from './../../../../assets/illustrations/part3.png';
import Part4 from './../../../../assets/illustrations/part4.png';
import {BgWrapper} from "./style";

// http://localhost:3000/?code=ff81544bd900d16893b13f223ec7f55811a74e44402a3d8cbadec15e1ffe9ad1

// https://dribbble.com/oauth/token?client_id=c2b887f59f72852ade2bcd97b400c7a91e870c7cc69e6ae3ad1416ab141fce5d&client_secret=757be69caafd6e0c32d7893f72feb0cddf1e3bf224e4742a213c1ed9ac3246e0&code=ff81544bd900d16893b13f223ec7f55811a74e44402a3d8cbadec15e1ffe9ad1

const Illustrated: React.FC<{}> = () => {

    return (
        <BgWrapper>
            <div className="image">
                <img src={Part1} alt={"part 1"} />
                <img className={"astronaut bounced"} style={{animationDelay: ".3s"}} src={Part2} alt={"part 2"} />
                <img className={"bounced"} style={{animationDelay: ".5s"}} src={Part3} alt={"part 3"} />
                <img className={"bounced"} style={{animationDelay: ".7s"}} src={Part4} alt={"part 4"} />
            </div>
            <span>Forget about everything...</span>
            <strong>Let us make it great and amaze you <i>!</i></strong>
        </BgWrapper>
    );

}

export default memo(Illustrated);