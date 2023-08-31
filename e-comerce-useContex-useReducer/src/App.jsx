
import { useEffect, useState } from "react";
import { Cart, Footer, Header, Products } from "./components/index";
import axios from 'axios'
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./contex/cart";




function App() {
  const [products, setProducts] = useState([]);
  const { filterProducts } = useFilters()

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

  const filterdProducts = filterProducts(products).slice(0, 42)

  return (
    <>
      <CartProvider>
        <Cart />
        <Header />
        <Products products={filterdProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    </>
  );
}

export default App;


