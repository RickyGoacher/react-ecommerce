import { getProducts } from '../../../data/ProductData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDataInterface } from '../../../App.types';
import { ProductCard } from '../../Components/ProductCard/ProductCard';
import './styles.css';

export const Products = () => {

    const Params = useParams();

    const [getProductData, setProductData] = useState<Array<ProductDataInterface> | null>(null);

    useEffect(() => {
        fetchProducts();
    }, [Params]);

    async function fetchProducts() {
        const data = await getProducts(10, 0, Params.category);
        setProductData(data.products);
    }

    const GenerateProducts = getProductData?.map(item => {
        return <ProductCard key={item.title} props={item}/>
    });

    return (
        <>
            <h1>Products</h1>
            <div className='product-list'>
                {GenerateProducts}
            </div>
        </>
    );
}