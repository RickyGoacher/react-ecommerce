import { ReactNode } from "react";
import "./style.css";

interface BannerInterface {
    Image: string;
    children: ReactNode
}

export const Banner = ({Image, children}:BannerInterface) => {
    return (
        <div className="banner-image-container">
            <div className="overlay"></div>
            <img src={Image}/>
            <div className="text">
                {children}
            </div>
        </div>
    )
}