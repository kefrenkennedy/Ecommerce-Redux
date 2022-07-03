import { useDispatch, useSelector } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import "./styles.css";

export default function CartShowcase() {
  const userCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div id="containerMain">
        <div id="headeer">
          <span>Produto</span>
          <span>Preço</span>
        </div>
        <ul id="ul11">
          {!!userCart &&
            userCart.map((product, index) => {
              return (
                <li id="cardCart" key={index}>
                  <img id="img1" alt={product.name} src={product.image} />
                  <div id="div2">
                    <span id="div1">
                      <p> {product.name}</p>
                      <span>R$ {product.price}</span>
                    </span>
                    <button
                      id="buton"
                      onClick={() => dispatch(removeFromCartThunk(product))}
                    >
                      Remover do carrinho
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
