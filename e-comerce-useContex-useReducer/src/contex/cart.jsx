import { createContext, useState } from "react";

// 1. crear contexto
export const CartContext = createContext()

//2. crear provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        //ver si el product esta en el car
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
        }

        // const item = cart.find(item => item.id === product.id);
        // if (item) {
        //     item.quantity++;
        //     setCart(cart);
        // }

        //Producto no esta en el carrito
        setCart(prevState => ({
            prevState, 
          {
                ...product,
                quantity: 1
            }
        }))
}

const clearCart = () => {
    setCart([])
}
return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }} > {children}</CartContext.Provider >
)
}

