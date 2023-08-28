
import { useEffect, useState } from "react";
import { Products } from "./components/index"; 
import axios from 'axios'



function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      try {
        const { data: { products } } = await axios('https://dummyjson.com/products/?limit=10');
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);


  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default App;





