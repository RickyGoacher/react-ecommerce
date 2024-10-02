import { Reviews } from "../Reviews/Reviews"; 
import { Brand } from "../Brand/Brand";
import { Price } from "../Price/Price";
import { AddToBasket } from "../AddToBasket/AddToBasket";
import "./style.css";

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
        <section className="product-details">
            <div className="product-details-wrapper">
                {props.Brand && <Brand Name={props.Brand} BrandStyles={{backgroundColor: 'blue', color: "white", padding: '1rem 2rem'}}/>}
                <h1>{props.Title}</h1>
                <Reviews rating={StarRating} styles={{width: "24px", height: "24px", backgroundColor: "#c1c111"}}/>
                <span>SKU: {props.Sku}</span>
                {props.Price && <Price Price={props.Price} DiscountPercentage={props?.DiscountPercent} OldPriceStyles={{color: "grey", fontSize: "1.5rem"}} DiscountedPriceStyles={{color: "red", fontSize: "3rem"}} FinalPriceStyles={{color: "Black", fontSize: "3rem"}}/>}
                <AddToBasket/>
                <p>{props.Description}</p>
            </div>
        </section>
    );
}