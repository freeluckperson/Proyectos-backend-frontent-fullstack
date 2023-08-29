import { createContext, useState } from "react";


// 1. Creamos el contexto (este es el que tenemos que consumir)
export const FiltersContex = createContext();

// 2. Crear el provider (nos provee de acceso al contexto)
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    sortOrder: "asc",
    minPrice: 0,
  });

  return (
    <FiltersContex.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContex.Provider>
  );
}
