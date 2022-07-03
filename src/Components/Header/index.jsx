import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";
import { useSelector } from "react-redux";

export default function Header() {
  const userCart = useSelector((state) => state.cart);

  return (
    <div id="headerContainer">
      <header id="header">
        <span>
          <Link id="kenzieShop" to="/">
            Kenzie Shop
          </Link>
        </span>
        <span id="containerButtons">
          <button id="containerCartButton">
            <Link id="cartButton" to="/cartPage">
              <AiOutlineShoppingCart />
              <span id="blueBall">{userCart !== [] && userCart.length}</span>
              Carrinho
            </Link>
          </button>
          <button id="containerCartButton">
            <FiLogIn id="cartButton" /> Entrar
          </button>
        </span>
      </header>
    </div>
  );
}
