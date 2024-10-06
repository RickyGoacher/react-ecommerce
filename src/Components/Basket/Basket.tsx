import { useState, useEffect, useRef } from "react";
import { useBasketContext } from "../../Context/BasketContext/BasketContext";
import "./style.css";

export const Basket = () => {

    const {increaseQuantity, decreaseQuantity, getBasketItem, removeFromBasket} = useBasketContext();

    const [getBasketState, setBasketState] = useState<boolean>(false);

    const ref = useRef<HTMLInputElement>(null);

    function outsideClickHandler(e:Event) {
        e.preventDefault();
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

    console.log(getBasketItem, 'basker it')

    const GenerateBasketItems = getBasketItem.map(item => {

        console.log(item.image, 'image')

        return (
            <div key={item.sku} className="basket-item">
                <img src={item.image} width="80" height="80"/>
                <div className="details">
                    <span>{item.name}</span>
                </div>
                <div className="action-wrapper">
                    <div className="actions">
                        <span onClick={() => increaseQuantity(item.sku, item.name, item.image)}>+</span>
                        <span>{item.quantity}</span>
                        <span onClick={() => decreaseQuantity(item.sku)}>-</span>
                    </div>
                    <div className="actions">
                        <button onClick={() => removeFromBasket(item.sku)}>Remove</button>            
                    </div>  
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
                    <div className="basket-wrapper">
                        <div className="basket-items">
                            {GenerateBasketItems}
                        </div>
                        <div className="basket-proceed-actions">
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}