import React, {memo, useCallback, useState} from "react";
import {ColorResult, CompactPicker, GithubPicker} from "react-color";
import styled from "styled-components";
import KeyBuilder from "../../../../../../../../utils/KeyBuilder";
import {Close32} from "@carbon/icons-react";
import {FormProps} from "../../../../model/FormProps";

interface ColorPickerUIProps {
    form: FormProps
}

const PickerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1em;

  ._picker {
    margin-top: 1em;
  }
  
  ._colors {
    display: flex;
    margin-left: 1em;
    flex-wrap: wrap;
    min-width: 50px;
    max-width: 150px;
    min-height: 50px;
    max-height: 150px;
  }
`;

const ColorCard = styled.div<{color: string}>`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.color};
  position: relative;
  
  &:hover {
    .remover{
      opacity: 1;
    }
  }
  
  .remover {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: brown;
    opacity: 0;
    transition-duration: .5s;
    transition-delay: 0s;
    transition-property: all;
    transition-timing-function: ease-in-out;
    
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ColorPickerUI = ({form}: ColorPickerUIProps) => {

    const [colors, setColors] = useState<Map<string, ColorResult>>(new Map<string, ColorResult>());
    const [refresher, setRefresher] = useState<string>(KeyBuilder.build);

    const onChangeHandler = useCallback(async (color: ColorResult, event: any) => {
        if(colors.size < 9) {
            await setColors((oldValue) => {
                oldValue.set(color.hex, color);
                return oldValue;
            });
        }
        setRefresher(KeyBuilder.build);
        form.setValue("colors", colors.keys());
    }, [colors, refresher])

    const deleteIt = useCallback((index: string) => {
        setColors((oldValue) => {
            oldValue.delete(index);
            return oldValue;
        });
        setRefresher(KeyBuilder.build);
    }, [setColors, refresher])

    return (
        <PickerWrapper>
            <CompactPicker onChangeComplete={onChangeHandler} className={"_picker"} />
            <div className="_colors" key={refresher}>
                {
                    (Array.from(colors.values())).map((item: ColorResult, index: number) => {
                        return <ColorCard key={KeyBuilder.build} color={item.hex}>
                            <div className="remover" onClick={() => deleteIt(item.hex)}><Close32/></div>
                        </ColorCard>
                    })
                }
            </div>
        </PickerWrapper>
    );

}

export default memo(ColorPickerUI);
