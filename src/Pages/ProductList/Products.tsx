import { getProducts } from '../../../data/ProductData';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { ProductListInterface } from '../../../App.types';
import { ProductCard } from '../../Components/ProductCard/ProductCard';
import { Heading } from '../../Components/Headings/Heading';
import { ToolBar } from '../../Components/ToolBar/ToolBar';
import { Pagination } from '../../Components/Pagination/Pagination';
import './styles.css';

interface SortInterface {
    direction: string;
    param: string;
}

export const Products = () => {

    const Params = useParams();
    const [getProductData, setProductData] = useState<ProductListInterface>();
    const [getSortOrder, setSortOrder] = useState<SortInterface>({direction: 'asc', param: 'title'});
    const [getPageNumber, setPageNumber] = useState(0);
    const ProductLimit = 6;

    const fetchProducts = useCallback(async () => {
        const data = await getProducts(ProductLimit, (ProductLimit * (getPageNumber)), Params.category, getSortOrder.param, getSortOrder.direction);
        setProductData(data);
    }, [getSortOrder, Params, getPageNumber]);

    useEffect(() => {
        fetchProducts();
        console.log(getPageNumber)
    }, [Params, getSortOrder, fetchProducts, getPageNumber]);

    const GenerateProducts = getProductData?.products.map(item => {
        return <ProductCard key={item.title} props={item}/>
    });

    return (
        <>
            <Heading Number={1} HeadingStyles={{textAlign: "center", padding: "1rem"}}>{Params.category?.split('-').join(' ').toUpperCase()}</Heading>
            <ToolBar SetSortOrder={setSortOrder}/>
            <div className='product-list'>
                {GenerateProducts}
            </div>
            {getProductData && <Pagination Limit={ProductLimit} Total={getProductData?.total} SetPageNumber={setPageNumber}/>}
        </>
    );
}