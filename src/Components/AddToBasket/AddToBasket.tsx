import { useBasketContext } from "../../Context/BasketContext/Context";
import "./style.css";

interface AddToBasketInterface {
    ProductName: string;
    ProductSku: string;
    ProductImage: string;
    ProductPrice: number;
    ProductDiscount: number;
}

export const AddToBasket = ({ProductName, ProductSku, ProductImage, ProductPrice, ProductDiscount}: AddToBasketInterface) => {

    const {
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
    } = useBasketContext();

    const Quantity = getItemQuantity(ProductSku);

    return (
        <>
            <div className="addto-basket-actions">
                <div className="quantity-wrapper">
                    <span className="minus" onClick={() => decreaseQuantity(ProductSku)}>-</span><span>{Quantity}</span><span className="plus" onClick={() => increaseQuantity(ProductSku, ProductName, ProductImage, ProductPrice, ProductDiscount)}>+</span>
                </div>
                <button className="basket-btn" onClick={() => increaseQuantity(ProductSku, ProductName, ProductImage, ProductPrice, ProductDiscount)}>Add to Basket</button>
            </div>
        </>
    );
}