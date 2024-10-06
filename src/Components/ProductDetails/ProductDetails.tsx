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
    Image?: string;
}

export const ProductDetails = (props:ProductDetailsInterface) => {
    
    const StarRating = props.Rating ? props.Rating : 0;

    console.log(props, ' pros')

    return (
        <section className="product-details">
            <div className="product-details-wrapper">
                {props.Brand && <Brand Name={props.Brand} BrandStyles={{backgroundColor: 'var(--secondary-bg-colour)', color: "var(--white-colour)", padding: 'var(--medium-spacing)'}}/>}
                <h1>{props.Title}</h1>
                <Reviews rating={StarRating} styles={{width: "24px", height: "24px", backgroundColor: "#c1c111"}}/>
                <span>SKU: {props.Sku}</span>
                {props.Price && <Price Price={props.Price} DiscountPercentage={props?.DiscountPercent} OldPriceStyles={{color: "var(--grey-colour)", fontSize: "1.5rem"}} DiscountedPriceStyles={{color: "var(--cta-colour)", fontSize: "3rem"}} FinalPriceStyles={{color: "var(--black-colour)", fontSize: "3rem"}}/>}
                {props.Title && props.Sku && props.Image && <AddToBasket ProductName={props.Title} ProductSku={props.Sku} ProductImage={props.Image}/>}
                <p>{props.Description}</p>
            </div>
        </section>
    );
}