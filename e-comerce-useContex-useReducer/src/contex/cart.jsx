import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";
import { CART_ACTION_TYPE } from "../reducers/cart";

// 1. crear contexto
export const CartContext = createContext()

function useCartReducer() {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: CART_ACTION_TYPE.ADD_TO_CART,
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: CART_ACTION_TYPE.REMOVE_FROM_CART,
        payload: product
    })

    const clearCart = () => dispatch({
        type: CART_ACTION_TYPE.CLEAR_CART,
    })
    return { state, addToCart, removeFromCart, clearCart }
}

//2. crear provider
export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
    return (
        <CartContext.Provider value={
            {
                cart: state,
                addToCart,
                removeFromCart,
                clearCart
            }} >
            {children}
        </CartContext.Provider >
    )
}




