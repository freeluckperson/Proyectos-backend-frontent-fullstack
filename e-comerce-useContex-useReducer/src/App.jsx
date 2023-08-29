
import { useEffect, useState } from "react";
import { Footer, Header, Products } from "./components/index";
import axios from 'axios'
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";




function App() {
  const [products, setProducts] = useState([]);
  const { filters, filterProducts, setFilters } = useFilters()

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
    <>
      <Header setFilters={setFilters} />
      <Products products={filterdProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;





