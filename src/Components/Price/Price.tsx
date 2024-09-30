import { CSSProperties } from 'react';
import './styles.css';

interface PriceInterface {
    Price: number;
    DiscountPercentage?: number;
    OldPriceStyles?: CSSProperties;
    FinalPriceStyles?: CSSProperties;
    DiscountedPriceStyles?: CSSProperties;
}

export const Price = ({Price, DiscountPercentage, OldPriceStyles, FinalPriceStyles, DiscountedPriceStyles}:PriceInterface) => {

    const OriginalPrice = `£${Price}`;
    const DiscountedPrice = DiscountPercentage ? '£' + (Price - Price * (DiscountPercentage / 100)).toFixed(2) : null;

    return (
        <div className="price-container">
            {DiscountedPrice ? 
                <>                
                    <span className="old-price" style={OldPriceStyles}>Was: {OriginalPrice}</span>
                    <span className="final-price" style={DiscountedPriceStyles}>{DiscountedPrice}</span>
                </> :       
                <span className="final-price" style={FinalPriceStyles}>Price: {OriginalPrice}</span>
            }
        </div>
    );
}
