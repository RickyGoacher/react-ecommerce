import { CSSProperties, ReactNode, createElement } from "react";
import "./styles.css";

interface HeadingInterface {
    Number: number;
    HeadingStyles?: CSSProperties;
    children: ReactNode;
}

export const Heading = ({Number, HeadingStyles, children}:HeadingInterface) => {

    return (
        createElement(
            `h${Number}`,
            {style: HeadingStyles},
            children
        )
    )
}