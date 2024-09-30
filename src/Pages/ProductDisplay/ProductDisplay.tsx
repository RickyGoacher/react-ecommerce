import { useLocation } from "react-router-dom";
import { getProduct } from "../../../data/ProductData";
import { useEffect, useState } from "react";
import { ProductDataInterface } from '../../../App.types';
import { ProductDetails } from "../../Components/ProductDetails/ProductDetails";

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
            <ProductDetails 
                Title={getProductData?.title} 
                Description={getProductData?.description} 
                Brand={getProductData?.brand}
                Price={getProductData?.price}
                DiscountPercent={getProductData?.discountPercentage}
                Rating={getProductData?.rating}
                Sku={getProductData?.sku}
            />
        </>
    );
}