import { useState, useEffect, useRef } from "react";
import { useBasketContext } from "../../Context/BasketContext/Context";
import CloseIcon from "../../assets/images/icons/circle-xmark-regular.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Price } from "../Price/Price";

export const Basket = () => {

    const {increaseQuantity, decreaseQuantity, getBasketItem, removeFromBasket} = useBasketContext();

    const [getBasketState, setBasketState] = useState<boolean>(false);

    const [getBasketTotal, setBasketTotal] = useState<number>(0);

    const ref = useRef<HTMLInputElement>(null);

    function outsideClickHandler(e:Event) {
        e.preventDefault();
        if (ref.current && !ref.current.contains(e.target as HTMLButtonElement)) {
            setBasketState(false);
        } 
    }

    useEffect(() => {
        getBasketState && window.addEventListener("mousedown", outsideClickHandler);
        return (() => {
            window.removeEventListener("mousedown", outsideClickHandler);
        });
    });

    const GenerateBasketTotal = getBasketItem.reduce((acc:number, item) => {
        const DiscountedPrice = item.discount ? (item.price - item.price * (item.discount / 100)).toFixed(2) : null;
        if(DiscountedPrice) {
            return acc + (Number(DiscountedPrice) * item.quantity);
        } else {
            return acc + (item.price * item.quantity);
        }  
    }, 0);

    useEffect(() => {
        setBasketTotal(GenerateBasketTotal)
    }, [GenerateBasketTotal]);

    const GenerateBasketItems = getBasketItem.map(item => {
        return (
            <div key={item.sku} className="basket-item">
                <img src={item.image} width="80" height="80"/>
                <div className="details">
                    <span>{item.name}</span>
                    <Price Price={item?.price} DiscountPercentage={item.discount} OldPriceStyles={{color: "var(--grey-colour)", fontSize: "1rem"}} DiscountedPriceStyles={{color: "var(--cta-colour)", fontSize: "1.1rem"}} FinalPriceStyles={{color: "var(--black-colour)", fontSize: "1.5rem"}}/>
                </div>
                <div className="action-wrapper">
                    <div className="actions">
                        <span onClick={() => decreaseQuantity(item.sku)}>-</span>
                        <span>{item.quantity}</span>
                        <span onClick={() => increaseQuantity(item.sku, item.name, item.image, item.price, item.discount)}>+</span>
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
                <span className="basket-trigger" onClick={() => setBasketState(!getBasketState)}><span>Basket</span>{Counter > 0 && <span className="counter">{ Counter}</span>}</span>
                <div ref={ref} className={getBasketState ? "basket active" : "basket"}>
                    <div className="basket-actions"><span>My Basket</span><span onClick={() => setBasketState(!getBasketState)}><img src={CloseIcon} width="24" height="24"/></span></div>
                    <div className="basket-wrapper">
                        <div className="basket-proceed-actions">
                            <button onClick={() => setTimeout(() => setBasketState(false), 300)}><NavLink to={"/checkout"}>Proceed to Checkout</NavLink></button>
                        </div>
                        <div className="basket-totals">
                          <span>Total: </span><span>£{getBasketTotal}</span>
                        </div>
                        <div className="basket-items">
                            {GenerateBasketItems}
                        </div>
                        <div className="basket-proceed-actions">
                            <button onClick={() => setTimeout(() => setBasketState(false), 300)}><NavLink to={"/checkout"}>Proceed to Checkout</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}