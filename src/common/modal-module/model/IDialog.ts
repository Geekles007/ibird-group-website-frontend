interface IDialog {
    content: JSX.Element | null;
    size?: "xs" | "sm" | "lg";
    title: string;
}

export default IDialog;