import { useBasketContext } from "../../Context/BasketContext/BasketContext";
import "./style.css";

interface AddToBasketInterface {
    ProductName: string;
    ProductSku: string;
    ProductImage: string;
}

export const AddToBasket = ({ProductName, ProductSku, ProductImage}: AddToBasketInterface) => {

    const {
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
    } = useBasketContext();

    const Quantity = getItemQuantity(ProductSku)

    return (
        <>
            <div className="addto-basket-actions">
                <span className="minus" onClick={() => decreaseQuantity(ProductSku)}>-</span><button className="basket-btn" onClick={() => increaseQuantity(ProductSku, ProductName, ProductImage)}>Add to Basket</button><span className="plus" onClick={() => increaseQuantity(ProductSku, ProductName, ProductImage)}>+</span>
            </div>
        </>
    );
}