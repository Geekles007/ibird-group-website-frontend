import React, {memo} from "react";
import styled from "styled-components";
import {REACT_APP_ACCESS_TOKEN, SHOTS_PER_PAGE, size} from "../../../../constants";
import axios from 'axios';
import ImageCard from "../../../../common/image-card";
import LoaderUI from "../../../../common/loader";

const GalleryWrapper = styled.div`
    min-height: 300px;
    padding: 3em 5em;
    
  @media (max-width: ${size.mobileL}) {
    & {
        padding: 1em 0em;
    }
  }
    
    img {
        object-position: center;
        object-fit: contain;
    }
    
    h1 {
        font-size: 4em;
        position: relative;
        z-index: 4;
        margin-bottom: 1em;
        
        &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 5px;
            
            height: 15px;
            z-index: -1;
            width: 130px;
            background-color: ${({theme}) => theme.accentColor};
        }
    }
  
    .grid {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
`;

const GalleryPortfolio: React.FC<{}> = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [dribbblePage] = React.useState<any>(1);
    const [dribbblePosts, setDribbblePosts] = React.useState<any>([]);

    React.useEffect(() => {
        async function getDribbblePosts() {
            try {
                const dribbbleRes = await axios.get(
                    `https://api.dribbble.com/v2/user/shots?access_token=${REACT_APP_ACCESS_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
                );

                setDribbblePosts([...dribbblePosts, ...dribbbleRes?.data]);

                if (isLoading) setIsLoading(false);
            } catch (error) {
                console.warn(error);
                if (isLoading) setIsLoading(false);
                setIsError(true);
            }
        }

        getDribbblePosts();
    }, []);

    return (
        <GalleryWrapper>
            <h1>My iBirdy Gallery</h1>
            {
                isLoading ? <LoaderUI/> : null
            }
            <div className="grid">
                {
                    dribbblePosts.map((item: any) => {
                        return (
                            <ImageCard key={item.id} item={item}/>
                        );
                    })
                }
            </div>
        </GalleryWrapper>
    );

}

export default memo(GalleryPortfolio);