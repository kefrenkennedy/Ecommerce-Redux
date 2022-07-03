import { useSelector } from "react-redux";

import "./styles.css"

export default function PurchaseDetails() {
  const userCart = useSelector((state) => state.cart);

  const userCartTotalPrice = () => {
    const allPrices = userCart.map((prod) => prod.price);

    const allPricesSum = allPrices.reduce((a, b) => a + b, 0);
    return allPricesSum;
  };
  return (
    <>
      <div id="detailsContainer">
        <span id="resumoPedido">Resumo do Pedido</span>
        <span id="details">
          <span id="produtos">{!!userCart ? userCart.length : 0} produto(s)</span>
          <span id="reais">R$ {!!userCart ? userCartTotalPrice().toFixed(2) : 0}</span>
        </span>
        <button id="buttonDetails">FINALIZAR O PEDIDO</button>
      </div>
    </>
  );
}
