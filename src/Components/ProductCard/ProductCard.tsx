import './styles.css';
import { NavLink } from 'react-router-dom';
import {ProductDataInterface} from '../../../App.types.ts';
import { Reviews } from '../Reviews/Reviews.tsx';
import { Price } from '../Price/Price.tsx';

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
                <h3>{props.title}</h3>
                <Reviews rating={props.rating} styles={{width: "24px", height: "24px", backgroundColor: "#c1c111"}}/>
                <Price Price={props?.price} DiscountPercentage={props?.discountPercentage} OldPriceStyles={{color: "grey", fontSize: "1rem"}} DiscountedPriceStyles={{color: "red", fontSize: "1.5rem"}} FinalPriceStyles={{color: "Black", fontSize: "1.5rem"}}/>
                <p>{props.description}</p>
            </NavLink>
        </div>
    );
}