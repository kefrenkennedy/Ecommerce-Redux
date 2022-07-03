import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/cartPage">
          <CartPage />
        </Route>
      </Switch>
    </>
  );
}
