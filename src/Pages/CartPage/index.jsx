import CartShowcase from "../../Components/CartShowcase";
import Header from "../../Components/Header";
import PurchaseDetails from "../../Components/PurchaseDetails";
import "./styles.css"

export default function CartPage() {
  return (
    < >
      <Header />
      <div id="containerCartPage">
        <CartShowcase />
        <PurchaseDetails />
      </div>
    </>
  );
}
