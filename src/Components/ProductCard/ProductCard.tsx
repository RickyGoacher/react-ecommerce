import './styles.css';
import { NavLink } from 'react-router-dom';
import {ProductDataInterface} from '../../../App.types.ts';

interface ProductCardInterface {
    props: ProductDataInterface;
}

export const ProductCard = ({props}:ProductCardInterface) => {

    const ProductURL = props.title.split(' ').join('-').toLowerCase();

    return (
        <div className="product-card">
            <NavLink to={ProductURL}>
                <div className="image">
                    <img src={props.thumbnail} width="400" height="200"/>
                </div>
                <h3>{props.title}</h3>
                <span>£{props.price}</span>
                <p>{props.description}</p>
            </NavLink>
        </div>
    );
}