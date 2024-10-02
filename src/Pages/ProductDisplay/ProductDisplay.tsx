import { useLocation } from "react-router-dom";
import { getProduct } from "../../../data/ProductData";
import { useEffect, useState } from "react";
import { ProductDataInterface } from '../../../App.types';
import { ProductDetails } from "../../Components/ProductDetails/ProductDetails";
import { Gallery } from "../../Components/Gallery/Gallery";
import "./styles.css";

export const ProductDisplay = () => {

    const Location = useLocation();

    const [getProductData, setProductData] = useState<ProductDataInterface | null>(null);

    useEffect(() => {
        fetchProduct();
    },[]);

    async function fetchProduct() {
        const data = await getProduct(Location.state.id);
        console.log(data, 'this here')
        setProductData(data);
    }

    return (
        <div className="product-container">
            {getProductData && <Gallery Images={getProductData?.images}/>}
            <ProductDetails 
                Title={getProductData?.title} 
                Description={getProductData?.description} 
                Brand={getProductData?.brand}
                Price={getProductData?.price}
                DiscountPercent={getProductData?.discountPercentage}
                Rating={getProductData?.rating}
                Sku={getProductData?.sku}
            />
        </div>
    );
}