import { ReactNode } from "react";
import "./style.css";

interface ImageTextInterface {
    Image: string;
    children: ReactNode;
}

export const ImageText = ({Image, children}:ImageTextInterface) => {
    return (
        <div className="image-text-container">
            <div className="image">
                <img src={Image}/>
            </div>
            <div className="text">
                {children}
            </div>
        </div>
    );
}