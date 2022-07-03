import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { products } from "../../store/modules/products/reducer";

import "./styles.css";

export default function Showcase() {
  const dispatch = useDispatch();

  return (
    <>
      <ul id="prodList">
        {products.map((product, index) => {
          return (
            <li id="card" key={index}>
              <img id="cardImg" alt={product.name} src={product.image} />
              <p id="prodName"> {product.name}</p>
              <span id="prodPrice">R$ {product.price}</span>
              <button
                id="prodButton"
                onClick={() => dispatch(addToCartThunk(product))}
              >
                Adicionar ao Carrinho
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
