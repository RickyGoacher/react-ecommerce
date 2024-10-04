import { useState, useEffect, useRef } from "react";
import { useBasketContext } from "../../Context/BasketContext/BasketContext";
import "./style.css";

export const Basket = () => {

    const {increaseQuantity, decreaseQuantity, getBasketItem, removeFromBasket} = useBasketContext();

    const [getBasketState, setBasketState] = useState<boolean>(false);

    const ref = useRef<HTMLInputElement>(null);

    function outsideClickHandler(e:Event) {
        e.preventDefault();
        console.log(e, 'e')
        if (ref.current && !ref.current.contains(e.target as HTMLButtonElement)) {
            setBasketState(false);
        } 
    }

    useEffect(() => {
        window.addEventListener("mousedown", outsideClickHandler);
        return (() => {
            window.removeEventListener("mousedown", outsideClickHandler);
        });
    });

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

    const Counter = getBasketItem.reduce((acc, item) => {
       return acc + item.quantity;
    }, 0);

    return (
        <>
            <div className="basket-container">
                <span className="basket-trigger" onClick={() => setBasketState(!getBasketState)}><span>Basket</span><span className="counter">{Counter > 0 && Counter}</span></span>
                <div ref={ref} className={getBasketState ? "basket active" : "basket"}>
                    <div className="basket-actions"><span onClick={() => setBasketState(!getBasketState)}>X</span></div>
                    {GenerateBasketItems}
                </div>
            </div>
        </>
    );
}