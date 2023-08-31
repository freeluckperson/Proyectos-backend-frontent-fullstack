import { useContext } from "react";
import { CartContext } from "../contex/cart";

export const useCart = () => {
  const contex = useContext(CartContext);
  if (contex === undefined) {
    throw new Error("useCart must be used within a CardProvider");
  }
  return contex;
};
