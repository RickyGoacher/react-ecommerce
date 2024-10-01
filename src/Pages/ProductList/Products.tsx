import { getProducts } from '../../../data/ProductData';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { ProductDataInterface } from '../../../App.types';
import { ProductCard } from '../../Components/ProductCard/ProductCard';
import { Heading } from '../../Components/Headings/Heading';
import { ToolBar } from '../../Components/ToolBar/ToolBar';
import './styles.css';

interface SortInterface {
    direction: string;
    param: string;
}

export const Products = () => {

    const Params = useParams();
    const [getProductData, setProductData] = useState<Array<ProductDataInterface> | null>(null);
    const [getSortOrder, setSortOrder] = useState<SortInterface>({direction: 'asc', param: 'title'});

    const fetchProducts = useCallback(async () => {
        const data = await getProducts(10, 0, Params.category, getSortOrder.param, getSortOrder.direction);
        setProductData(data.products);
    }, [getSortOrder, Params]);

    useEffect(() => {
        fetchProducts();
    }, [Params, getSortOrder, fetchProducts]);

    const GenerateProducts = getProductData?.map(item => {
        return <ProductCard key={item.title} props={item}/>
    });

    return (
        <>
            <Heading Number={1} HeadingStyles={{textAlign: "center", padding: "1rem"}}>{Params.category?.split('-').join(' ').toUpperCase()}</Heading>
            <ToolBar SetSortOrder={setSortOrder}/>
            <div className='product-list'>
                {GenerateProducts}
            </div>
        </>
    );
}