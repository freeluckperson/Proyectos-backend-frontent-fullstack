import { useContext } from "react";
import { FiltersContex } from "../contex/filters";

export function useFilters() {
  const {
    filters: { sortOrder, category, minPrice },
    filters,
    setFilters,
  } = useContext(FiltersContex);

  const filterProducts = (products) => {
    return products
      .filter((product) => {
        return (
          product.price >= minPrice &&
          (category === "all" || product.category === filters.category)
        );
      })
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else if (sortOrder === "desc") {
          return b.price - a.price;
        }
      });
  };

  return { filters, filterProducts, setFilters };
}
