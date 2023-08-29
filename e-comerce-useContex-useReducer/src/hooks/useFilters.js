import { useContext } from "react";
import { FiltersContex } from "../contex/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContex);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
