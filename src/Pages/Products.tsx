import { getProducts } from '../../data/ProductData';

export const Products = () => {

    getProducts();

    return (
        <>
            <h1>Products</h1> 
        </>
    );
}