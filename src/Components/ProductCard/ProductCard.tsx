import './styles.css';
import { NavLink } from 'react-router-dom';
import {ProductDataInterface} from '../../../App.types.ts';
import { Reviews } from '../Reviews/Reviews.tsx';
import { Price } from '../Price/Price.tsx';
import { Heading } from '../Headings/Heading.tsx';
import { AddToBasket } from '../AddToBasket/AddToBasket.tsx';


interface ProductCardInterface {
    props: ProductDataInterface;
}

export const ProductCard = ({props}:ProductCardInterface) => {

    const ProductURL = props.title.split(' ').join('-').toLowerCase();

    return (
        <div className="product-card">
            <NavLink to={`/${ProductURL}`} state={{id: props.id}}>
                <div className="image">
                    <img src={props.thumbnail} width="400" height="200"/>
                </div>
                <Heading Number={3} HeadingStyles={{color: "var(--black-colour)"}}>{props.title}</Heading>
                <Reviews rating={props.rating} styles={{width: "18px", height: "18px", backgroundColor: "#c1c111"}}/>
                <Price Price={props?.price} DiscountPercentage={props?.discountPercentage} OldPriceStyles={{color: "var(--grey-colour)", fontSize: "1rem"}} DiscountedPriceStyles={{color: "var(--cta-colour)", fontSize: "1.2rem"}} FinalPriceStyles={{color: "var(--black-colour)", fontSize: "1.5rem"}}/>
            </NavLink>
            <div className='product-card-actions'>
                {props.title && props.sku && props.thumbnail && <AddToBasket ProductName={props.title} ProductSku={props.sku} ProductImage={props.thumbnail}/>}
            </div>
        </div>
    );
}