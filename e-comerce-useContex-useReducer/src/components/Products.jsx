import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import { useCart } from '../hooks/useCart';


const Products = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart()
  const checkProductInCart = product => cart.some(item => item.id === product.id)


  return (
    <main className='products'>
      <ul>
        {products.slice(0, 24).map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            < li key={product.id} >
              <div>
                <button style={{ backgroundColor: isProductInCart ? "red" : "#09f" }} onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}>
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title} - ${product.price}</strong>
              </div>
            </li>
          )
        })}
      </ul>
    </main >
  );
}

export default Products;





