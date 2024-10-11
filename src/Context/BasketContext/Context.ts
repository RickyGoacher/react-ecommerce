import { useContext, createContext, useEffect } from "react";

interface BasketContextInterface {
    getItemQuantity: (sku:string) => number;
    increaseQuantity: (sku:string, name:string, image:string) => void;
    decreaseQuantity: (sku:string) => void;
    getBasketItem: Array<{sku: string, quantity: number, name: string, image: string;}>;
    removeFromBasket: (sku:string) => void;
}

export const BasketContext = createContext({} as BasketContextInterface);

export function useBasketContext() {
    const UseBasketContext = useContext(BasketContext);
    useEffect(() => {}, [BasketContext]);
    return UseBasketContext;
}