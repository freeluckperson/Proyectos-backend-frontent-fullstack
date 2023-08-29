
import { useEffect, useState } from "react";
import { Footer, Header, Products } from "./components/index";
import axios from 'axios'



function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  const filterProducts = (products) => {
    return products.slice(0, 100).filter(product => {
      return product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
    })
  }


  useEffect(() => {
    (async function fetchData() {
      try {
        const { data: { products } } = await axios('https://dummyjson.com/products/?limit=100');
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const filterdProducts = filterProducts(products)

  return (
    <div>
      <Header setFilters={setFilters} />
      <Products products={filterdProducts} />
      <Footer filters={filters} />
    </div>
  );
}

export default App;





