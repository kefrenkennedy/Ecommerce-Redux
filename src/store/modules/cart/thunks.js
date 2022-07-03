import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyHaveThatItem = list.find((iten) => iten.id === product.id);

  if (!alreadyHaveThatItem) {
    const newList = [...list, product];
    localStorage.setItem("cart", JSON.stringify(newList));
    dispatch(addToCart(product));
  }
  return;
};

export const removeFromCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart"));
  const newList = list.filter((prod) => prod.id !== product.id);
  localStorage.setItem("cart", JSON.stringify(newList));
  window.location.reload(false);
  dispatch(removeFromCart(product));
};
