import { CART_ADD, CART_REMOVE } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CART_ADD:
      const { product } = action;
      return [...state, product];

    case CART_REMOVE:
      return state;
    default:
      return state;
  }
};
export default cartReducer;
