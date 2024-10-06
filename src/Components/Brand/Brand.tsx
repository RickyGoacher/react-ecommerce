import { CSSProperties } from "react";

interface BrandInterface {
    Name: string;
    BrandStyles?: CSSProperties;
}

export const Brand = ({Name, BrandStyles}:BrandInterface) => {
    return (
        <span className="brand" style={BrandStyles}>Brand: {Name}</span>
    );
}