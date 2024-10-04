import { useBasketContext } from "../../Context/BasketContext/BasketContext";
import "./style.css";

interface AddToBasketInterface {
    ProductName: string;
    ProductSku: string;
}

export const AddToBasket = ({ProductName, ProductSku}: AddToBasketInterface) => {

    const {
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
    } = useBasketContext();

    const Quantity = getItemQuantity(ProductSku)

    return (
        <>
            <div className="addto-basket-actions">
                <span className="minus" onClick={() => decreaseQuantity(ProductSku)}>-</span><button className="basket-btn" onClick={() => increaseQuantity(ProductSku, ProductName)}>Add to Basket</button><span className="plus" onClick={() => increaseQuantity(ProductSku, ProductName)}>+</span>
            </div>
        </>
    );
}