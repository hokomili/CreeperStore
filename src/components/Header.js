import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { Badge } from "antd";
import { CartIcon } from "./Icons";
import { setPage } from "../actions";
import {useAuth} from "../store/AuthContext"

export default function Header({ title }) {
  const {currentUser}=useAuth()
  const { state: { cartItems } } = useContext(StoreContext);

  const count = (cartItems.length > 0) ?
    cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;

  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text" onClick={onClickHeader}>
          <Link to="/">
            <h1 className="header-title">{title}</h1>
          </Link>
          <p className="header-slogan">An example made by Create-React-App.</p>
        </div>
        <Link to="/ShoppingCart" className="header-cart-summary" >
          <Badge count={count} size={"small"} style={{ color: 'white', backgroundColor: '#6366F2' }}>
            <CartIcon size={32} />
          </Badge>
          <p className="cart-summary-text"> Shopping bag </p>
        </Link>
        {currentUser?
        <Link to="/Profile" className="header-sign-in" >
          <Badge count={count} size={"small"} style={{ color: 'white', backgroundColor: '#6366F2' }}>
            <CartIcon size={32} />
          </Badge>
          <p className="cart-summary-text">Profile </p>
        </Link>
        :
        <Link to="/SignIn" className="header-sign-in" >
          <Badge count={count} size={"small"} style={{ color: 'white', backgroundColor: '#6366F2' }}>
            <CartIcon size={32} />
          </Badge>
          <p className="cart-summary-text"> Sign in </p>
        </Link>
        }
      </div>
      <hr className="hr-header-line" />
    </header>
  );
}
