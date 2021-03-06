import styled, {keyframes} from "styled-components";

const bounce = keyframes`
    0%{
        bottom: 10px;
    }
    50%{
        bottom: 0;
    }
    100%{
        bottom: 10px;
    }
`;

export const BgWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
    
    span {
        font-size: 1em;
        margin-bottom: .3em;
    }
    
    strong {
        font-size: 1.2em;
        font-weight: 500;
        position: relative;
        
        i{
            font-size: 3em;
            position: absolute;
            right: -20px;
            top: -20px;
            transform: rotate(15deg);
        }
    }
    
    .image {
        position: relative;
        width: 50vh;
        height: 50vh;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    img {
        position: absolute;
        object-fit: contain;
        object-position: center;
        width: 100%;
        height: 100%;
    }
    
    img.astronaut {
        width: 25vh;
    }
    
    .bounced {
        bottom: 0;
        animation: ${bounce} .7s 0s infinite;
    }
`;