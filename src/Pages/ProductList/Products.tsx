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
    console.log(Params, 'params');
    const [getProductData, setProductData] = useState<ProductListInterface>();
    const [getSortOrder, setSortOrder] = useState<SortInterface>({direction: 'asc', param: 'title'});
    const [getPageNumber, setPageNumber] = useState(0);
    console.log(getPageNumber, 'pnum')

    const fetchProducts = useCallback(async () => {
        const data = await getProducts(6, (6 * (getPageNumber)), Params.category, getSortOrder.param, getSortOrder.direction);
        console.log(data, 'data')
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
            {getProductData && <Pagination Limit={getProductData?.limit} Total={getProductData?.total} SetPageNumber={setPageNumber}/>}
        </>
    );
}