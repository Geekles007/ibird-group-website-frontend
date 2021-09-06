import {memo, ReactNode} from "react";

export interface ModalComposedProps {
    size: "sm" | "xs" | "lg" | undefined;
    open: boolean;
    onClose: () => void;
    children: ReactNode
}

const ModalComposed: React.FC<ModalComposedProps> = ({children}) => {

    return (
        <>
            {children}
        </>
    );

}

export default memo(ModalComposed);