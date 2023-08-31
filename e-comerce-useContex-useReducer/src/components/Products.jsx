import './Products.css'
import { AddToCartIcon } from './icons';


const Products = ({ products }) => {

  return (
    <main className='products'>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title} - ${product.price}</strong>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Products;





