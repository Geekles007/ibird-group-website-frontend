import styled from "styled-components";

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.accentColor};
    
    .designed {
        transform: rotate(-90deg);
        position: absolute;
        top: 49%;
        height: 10px;
        width: 100vh;
        text-align: center;
        
        font-size: 1em;
        
        left: calc(-50vh + 20px);
        
        
        img {
            height: 10px;
        }
    }
    
    strong {
        font-family: "cera";
        font-weight: 700;
        font-style: normal;
    }                                                                                                                                                                                                  
`;

export {
    HomeWrapper,
}