import {memo} from "react";
import styled from "styled-components";
import { DateTime } from "luxon";

export const Card = styled.a`
  margin-bottom: 1em;
  cursor: pointer;
  color: #fff;
  height: 400px;
  position: relative;
  overflow: hidden;
  flex: 1 0 21%;
  margin: 5px;
  
  @media (max-width: 768px) {
    flex: 1 0 50%;
  }
  
  @media (max-width: 1024px) {
    flex: 1 0 31%;
  }
  
  *{
    transition: all .5s 0s ease;
  }
  
  &:hover {
    .shot {
      filter: blur(5px);
    }
    
    .desc{
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .shot {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(0px);
  }

  .desc {
    background-color: #333;
    padding: 1em;
    min-height: 2em;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, .5);
    opacity: 0;
    transform: translateY(30px);
    
    p{
      font-size: .9em;
    }
    
    h4{
      font-weight: bold;
    }
    
    .tags{
      margin-top: 1em;
      display: flex;
      flex-wrap: wrap;
      
      .tag {
        border: 2px solid ${({theme}) => theme.accentColor};
        margin-right: 1em;
        padding: 5px;
        margin-bottom: 1em;
        border-radius: 10px;
      }
    }
    
    span {
      bottom: 1em;
      position: absolute;
    }
  }
`;

interface ImageCardProps {
    item: any
}

const ImageCard: React.FC<ImageCardProps> = ({item}) => {

    return (
        <Card href={item.html_url} target={"_blank"} className={"card-item"}>
            <div className={"shot"} style={{backgroundImage: `url(${item.images.hidpi})`}}/>
            <div className="desc">
                <h4>{item.title}</h4>
                <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                <div className="tags">
                    {
                        item.tags.map((tag: string) => {
                            return (
                                <div className="tag" key={tag}>
                                    {tag}
                                </div>
                            )
                        })
                    }
                </div>
                <span>{DateTime.fromISO(item.published_at).setLocale("en").toRelative()}</span>
            </div>
        </Card>
    );

}

export default memo(ImageCard);