import './styles.css';
import { NavLink } from 'react-router-dom';
import {ProductDataInterface} from '../../../App.types.ts';
import { Reviews } from '../Reviews/Reviews.tsx';
import { Price } from '../Price/Price.tsx';
import { Heading } from '../Headings/Heading.tsx';


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
                <Heading Number={3} HeadingStyles={{color: "black"}}>{props.title}</Heading>
                <Reviews rating={props.rating} styles={{width: "18px", height: "18px", backgroundColor: "#c1c111"}}/>
                <Price Price={props?.price} DiscountPercentage={props?.discountPercentage} OldPriceStyles={{color: "grey", fontSize: "1rem"}} DiscountedPriceStyles={{color: "red", fontSize: "1.2rem"}} FinalPriceStyles={{color: "Black", fontSize: "1.5rem"}}/>
                <p>{props.description}</p>
            </NavLink>
        </div>
    );
}