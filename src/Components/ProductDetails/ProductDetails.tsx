import { Reviews } from "../Reviews/Reviews"; 
import { Brand } from "../Brand/Brand";
import { Price } from "../Price/Price";

interface ProductDetailsInterface {
    Title?: string; 
    Description?: string;
    Brand?: string;
    Price?: number;
    DiscountPercent?: number;
    Rating?: number;
    Sku?: string;
}

export const ProductDetails = (props:ProductDetailsInterface) => {
    console.log(props)
    
    const StarRating = props.Rating ? props.Rating : 0;

    return (
        <section>
            {props.Brand && <Brand Name={props.Brand} BrandStyles={{backgroundColor: 'blue', color: "white", padding: '1rem 2rem'}}/>}
            <h1>{props.Title}</h1>
            <span>SKU: {props.Sku}</span>
            {props.Price && <Price Price={props.Price} DiscountPercentage={props?.DiscountPercent} OldPriceStyles={{color: "grey", fontSize: "1.5rem"}} DiscountedPriceStyles={{color: "red", fontSize: "3rem"}} FinalPriceStyles={{color: "Black", fontSize: "3rem"}}/>}
            <Reviews rating={StarRating} styles={{width: "24px", height: "24px", backgroundColor: "#c1c111"}}/>
        </section>
    );
}