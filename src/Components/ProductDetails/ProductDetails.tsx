import { Reviews } from "../Reviews/Reviews"; 
import { Brand } from "../Brand/Brand";
import { Price } from "../Price/Price";
import { AddToBasket } from "../AddToBasket/AddToBasket";
import { BrandPlaceholder } from "../Placeholders/BrandPlaceholder/BrandPlaceholder";
import "./style.css";
import { HeadingPlaceholder } from "../Placeholders/HeadingPlaceholder/HeadingPlaceholder";
import { ReviewsPlaceholder } from "../Placeholders/ReviewsPlaceholder/ReviewsPlaceholder";
import { PricePlaceholder } from "../Placeholders/PricePlaceholder/PricePlaceholder";

interface ProductDetailsInterface {
    Title?: string; 
    Description?: string;
    Brand?: string;
    Price?: number;
    DiscountPercent?: number;
    Rating?: number;
    Sku?: string;
    Image?: string;
}

export const ProductDetails = (props:ProductDetailsInterface) => {
    
    const StarRating = props.Rating ? props.Rating : 0;

    return (
        <section className="product-details">
            <div className="product-details-wrapper">
                {!props.Brand ? <BrandPlaceholder/> : <Brand Name={props.Brand} BrandStyles={{border: 'solid 2px var(--cta-colour)', color: "var(--cta-colour)", padding: 'var(--medium-spacing)', borderRadius: 'var(--border-radius)'}}/>}
                {!props.Title ? <HeadingPlaceholder/> : <h1>{props.Title}</h1>}
                {!StarRating ? <ReviewsPlaceholder/> : <Reviews rating={StarRating} styles={{width: "24px", height: "24px", backgroundColor: "#c1c111"}}/>}
                <span>SKU: {props.Sku}</span>
                {!props.Price ? <PricePlaceholder/> : <Price Price={props.Price} DiscountPercentage={props?.DiscountPercent} OldPriceStyles={{color: "#d1d1d1", fontSize: "1.2rem"}} DiscountedPriceStyles={{color: "var(--cta-colour)", fontSize: "1.8rem"}} FinalPriceStyles={{color: "var(--black-colour)", fontSize: "1.8rem"}}/>}
                {props.Title && props.Sku && props.Image && props.Price && props.DiscountPercent && <AddToBasket ProductName={props.Title} ProductSku={props.Sku} ProductImage={props.Image} ProductPrice={props.Price} ProductDiscount={props.DiscountPercent}/>}
                <p>{props.Description}</p>
            </div>
        </section>
    );
}