import {memo} from "react";
import styled from "styled-components";
import instagram from './../../../../assets/icons/001-instagram.svg';
import dribbble from './../../../../assets/icons/004-dribbble.svg';
import linkedIn from './../../../../assets/icons/005-linkedin.svg';

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  z-index: 9;

  img {
    width: 20px;
  }

  a {
    cursor: pointer;
  }

  ul {
    list-style-type: none;

    li:last-child {
      margin-bottom: 0;
    }

    li {
      margin-bottom: 15px;
    }
  }
`;

const SocialLinksUI: React.FC<{}> = () => {

    return (
        <SocialWrapper>
            <ul>
                <li><a href="https://www.instagram.com/ibird.design/" rel="noreferrer" target={"_blank"}><img alt={"social media icon"} src={instagram}/></a></li>
                <li><a href="https://www.linkedin.com/company/64646551" rel="noreferrer" target={"_blank"}><img alt={"social media icon"} src={linkedIn}/></a></li>
                <li><a href="https://dribbble.com/ibirddesign" rel="noreferrer" target={"_blank"}><img alt={"social media icon"} src={dribbble}/></a></li>
            </ul>
        </SocialWrapper>
    );

}

export default memo(SocialLinksUI);