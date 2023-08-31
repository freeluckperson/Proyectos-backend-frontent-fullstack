import { createContext, useState } from "react";

// 1. crear contexto
export const CartContext = createContext()

//2. crear provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        // ver si el product esta en el car
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex > -1) {
            const newCart = cart.slice()
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        //Si el producto no esta en el cart
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            },
        ]))
    }

    const removeFrontCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart , removeFrontCart}} > {children}</CartContext.Provider >
    )
}

