import { useId } from "react";
import './Cart.css'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons";

const Cart = () => {
    const cartCheckBoxId = useId
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden />
            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="Iphone" />
                        <div>
                            <strong>iphone</strong> - $1499
                        </div>
                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
}

export default Cart;

