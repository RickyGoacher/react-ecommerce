import './styles.css';
import { NavLink } from 'react-router-dom';
import {ProductDataInterface} from '../../../App.types.ts';
import { Reviews } from '../Reviews/Reviews.tsx';

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
                <span>£{props.price}</span>
                <p>{props.description}</p>
            </NavLink>
        </div>
    );
}