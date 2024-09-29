import { getProducts, getCategories } from '../../data/ProductData';
import { useParams } from 'react-router-dom';

export const Products = () => {

    const Params = useParams();

    getProducts(10, 0, Params.category);

    return (
        <>
            <h1>Products</h1> 
        </>
    );
}