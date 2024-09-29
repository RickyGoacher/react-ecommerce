import { useLocation } from "react-router-dom";
import { getProduct } from "../../../data/ProductData";
import { useEffect, useState } from "react";
import { ProductDataInterface } from '../../../App.types';

export const ProductDisplay = () => {

    const Location = useLocation();

    const [getProductData, setProductData] = useState<ProductDataInterface | null>(null);

    useEffect(() => {
        fetchProduct();
    },[]);

    async function fetchProduct() {
        const data = await getProduct(Location.state.id);
        setProductData(data);
    }

    return (
        <>
            <h1>{getProductData?.title}</h1>
            <p>{getProductData?.description}</p>
            <span>{getProductData?.price}</span>
        </>
    );
}