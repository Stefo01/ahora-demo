import CartContext from "./cart-contex";

import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        if (existingCartItemIndex !== -1) {
            const updatedItems = [...state.items];
            const updatedItem = { ...updatedItems[existingCartItemIndex] };
            updatedItem.quantity += action.item.quantity;
            updatedItems[existingCartItemIndex] = updatedItem;
            return {
                items: updatedItems,
                totalAmount: updateTotalAmount
            }
        }
        return {
            items: [...state.items, action.item],
            totalAmount: updateTotalAmount
        }


    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingItem.price;
        let updateItems;
        if (existingItem.quantity === 1) {
            updateItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updateItem = { ...existingItem, quantity: existingItem.quantity - 1 }
            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updateItem;
        }
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        };
    }

    if (action.type === 'CLEAR') {
        return {
            items: [],
            totalAmount: 0
        };
    }

    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item1 => {
        dispatchCartAction({ type: 'ADD', item: item1 })
    };

    const removeItemFromCartHandler = id1 => {
        dispatchCartAction({ type: 'REMOVE', id: id1 })
    };

    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' })
    };

    const cartContex = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    };


    return (
        <CartContext.Provider value={cartContex}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;