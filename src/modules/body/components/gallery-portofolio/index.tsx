import React, {memo} from "react";
import styled from "styled-components";
import {dribbble_api, SHOTS_PER_PAGE} from "../../../../constants";
import axios from 'axios';
import ImageCard from "../../../../common/image-card";
import LoaderUI from "../../../../common/loader";

const GalleryWrapper = styled.div`
    width: 100vw;
    min-height: 300px;
    padding: 3em 5em;
    
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
    const [dribbblePage, setDribbblePage] = React.useState<any>(1);
    const [dribbblePosts, setDribbblePosts] = React.useState<any>([]);

    React.useEffect(() => {
        async function getDribbblePosts() {
            try {
                const dribbbleRes = await axios.get(
                    `https://api.dribbble.com/v2/user/shots?access_token=${dribbble_api.ACCESS_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
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
                isLoading ? <LoaderUI /> : null
            }
            <div className="grid">
                {
                    dribbblePosts.map((item: any) => {
                        return (
                            <ImageCard key={item.id} item={item} />
                        );
                    })
                }
            </div>
        </GalleryWrapper>
    );

}

export default memo(GalleryPortfolio);