import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useStorage } from "../../Hooks/UseStorageHook/UseStorage";

interface BasketContextProviderInterface {
    children: ReactNode
}

interface BasketContentInterface {
    getItemQuantity: (sku:string) => number;
    increaseQuantity: (sku:string, name:string) => void;
    decreaseQuantity: (sku:string) => void;
    getBasketItem: Array<{sku: string, quantity: number, name: string}>;
    removeFromBasket: (sku:string) => void;
}

interface BasketItemInterface {
    sku: string;
    quantity: number;
    name: string;
}

const BasketContext = createContext({} as BasketContentInterface);

export function useBasketContext() {
    return useContext(BasketContext);
}

export function BasketContextProvider({children}:BasketContextProviderInterface) {

    const [getStorage, setStorage] = useStorage();

    const CurrentBasket = JSON.parse(getStorage('basket'));

    const [getBasketItem, setBasketItem] = useState<Array<BasketItemInterface>>([]);

    useEffect(() => {
        setStorage(getBasketItem);
    }, [getBasketItem]);

    useEffect(() => {
        updateStorage();
    }, []);

    function updateStorage() {
        setBasketItem(CurrentBasket !== null ? CurrentBasket : []);
    }

    function getItemQuantity(sku: string) {
        return getBasketItem?.find(item => item.sku === sku)?.quantity || 0;
    }

    function increaseQuantity(sku: string, name: string) {
        setBasketItem(currentItems => {
            if(currentItems.find(item => item.sku === sku) == null) {
                return [...currentItems, { sku, quantity: 1, name }]
                
            } else {
                return currentItems.map(item => {
                    if(item.sku === sku) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseQuantity(sku: string) {
        setBasketItem(currentItems => {
            if(currentItems.find(item => item.sku === sku)?.quantity === 1) {
                return currentItems.filter(item => item.sku !== sku);
            } else {
                return currentItems.map(item => {
                    if(item.sku === sku) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromBasket(sku:string) {
        setBasketItem(currentItems => {
            return currentItems?.filter(item => item.sku !== sku);
        });
    }

    return (
        <BasketContext.Provider value={{getItemQuantity, increaseQuantity, decreaseQuantity, getBasketItem, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    );
}