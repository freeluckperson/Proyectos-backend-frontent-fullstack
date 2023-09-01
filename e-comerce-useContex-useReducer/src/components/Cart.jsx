import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'
import { useCart } from '../hooks/useCart.js'

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small >
                    Qty: {quantity}
                </small>
                <button onClick={addToCart} style={{backgroundColor: "white", color:"#09f"}}>+</button>
            </footer>
        </li>
    )
}

const Cart = () => {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart} style={{backgroundColor: "white", color:"#09f"}}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}

export default Cart


