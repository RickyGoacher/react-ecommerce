import { useBasketContext } from "../../Context/BasketContext/BasketContext";

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
            <div>
                <span onClick={() => decreaseQuantity(ProductSku)}>-</span><button onClick={() => increaseQuantity(ProductSku, ProductName)}>Add to Basket</button><span onClick={() => increaseQuantity(ProductSku, ProductName)}>+</span>
            </div>
        </>
    );
}