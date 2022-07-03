import { CART_ADD, CART_REMOVE } from "./actionTypes";

export const addToCart = (product) => ({
  type: CART_ADD,
  product,
});

export const removeFromCart = (produ) => ({
  type: CART_REMOVE,
  produ,
});
