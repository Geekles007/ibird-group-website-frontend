import React, {memo} from 'react';
import styled from "styled-components";
import heart from "../../assets/icons/heart.png";
import MapBoxUI from "../../common/map-box";
import {DateTime} from "luxon";
import {size} from "../../constants";

const FooterWrapper = styled.div`
  background-color: #000;
    
    .contacts {
      display: flex;
      flex-direction: column;
      width: 400px;
      position: absolute;
      top: 2em;
      left: 2em;
      z-index: 30;
      background-color: #000;
      padding: 2em;
      
      p{
        font-size:1.1em;
        color: #fff;
        margin-bottom: 1em;
      }
      
      h2{
        font-weight: 700;
        color: ${({theme}) => theme.accentColor};
      }
      
      span{
        color: #fff;
        margin-bottom: .5em;
      }
      
      span.my-location {
        color: ${({theme}) => theme.accentColor};
        margin-top: 1em;
      }
    }
    
    .contacts-mobile {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        
        display: none;
    }
  
  .top-footer {
    height: 450px;
    position: relative;
    overflow: hidden;
    
    .location {
      flex-grow: 1;
      height: 100%;
      width: 100vw;
      background-color: #fff;
    }
  }
  
  .bottom-footer {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 0 3em;
    
    border-top: 2px solid ${({theme}) => theme.accentColor};

    .designed {
      font-size: 1em;
      img {
        height: 10px;
      }
    }
  }
    
  @media (max-width: ${size.mobileL}) {
    .contacts-mobile {
        display: flex;
    }
    
    .contacts-desktop {
        display: none;
    }
    
    .bottom-footer {
        flex-direction: column;
        justify-content: space-around;
    }
  }
`;

const FooterUI: React.FC = () => {

    return (
        <FooterWrapper id={"hire-us"}>
            <div className="contacts contacts-mobile">
                <h2>iBIRD DESIGN</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda, consequuntur debitis delectus illo ipsam.</p>
                <span className="phone-number">+7 (993) 333 43 32 33</span>
                <span className="email">hi@ibird-group.com</span>
                <span className={"my-location"}>Nizhny Novgorod, Gagarina (Nizhny Novgorod Oblast)</span>
            </div>
            <div className="top-footer">
                <div className="contacts contacts-desktop">
                    <h2>iBIRD DESIGN</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda, consequuntur debitis delectus illo ipsam.</p>
                    <span className="phone-number">+7 (993) 333 43 32 33</span>
                    <span className="email">hi@ibird-group.com</span>
                    <span className={"my-location"}>Nizhny Novgorod, Gagarina (Nizhny Novgorod Oblast)</span>
                </div>
                <div className="location">
                    <MapBoxUI />
                </div>
            </div>
            <div className="bottom-footer">
                <span>© {DateTime.now().year}. All rights reserved.</span>
                <div className="designed">Designed with <img src={heart} alt={"heart illustration"} /> by <strong>iBIRD Design</strong></div>
            </div>
        </FooterWrapper>
    );

}

export default memo(FooterUI);