import { useBasketContext } from "../../Context/BasketContext/BasketContext"
import "./style.css";

export const Basket = () => {

    const {increaseQuantity, decreaseQuantity, getBasketItem, removeFromBasket} = useBasketContext();

    const GenerateBasketItems = getBasketItem.map(item => {
        return (
            <div key={item.sku} className="basket-item">
                <span>{item.name}</span>
                <span>{item.sku}</span>
                <span>{item.quantity}</span>
                <div className="actions">
                    <span onClick={() => decreaseQuantity(item.sku)}>-</span>
                    <button onClick={() => removeFromBasket(item.sku)}>Remove</button>
                    <span onClick={() => increaseQuantity(item.sku, item.name)}>+</span>
                </div>    
            </div>         
        );
    });

    return (
        <>
            <div className="basket-container">
                <span>Basket</span>
                <div className="basket">
                    {GenerateBasketItems}
                </div>
            </div>
        </>
    );
}