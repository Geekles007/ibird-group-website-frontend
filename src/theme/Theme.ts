import {DefaultTheme} from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        accentColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    accentColor: "#FDD708",
};

export const darkTheme: DefaultTheme = {
    accentColor: "#FDD708",
};
