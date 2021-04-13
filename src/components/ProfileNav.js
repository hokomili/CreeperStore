import NavItem from "./NavItem";
import {Row,Col} from "antd"
import {Link} from "react-router-dom"
import { CartIcon } from "./Icons";

export default function ProfileNav(){
    return(
        <Row>
            <Row>
                <img src="https://s3-alpha-sig.figma.com/img/3610/4177/28ed0b6d91d2e0aef136794d182e5172?Expires=1619395200&Signature=f3kJFnRpnbhtT9BRhJB1QzYZLROGJGW1LJ2y7HIqqodq18q07s6wz~sMjh3T5hE6n2DII-NE-Tx4h4vnR7933H2IYwyfximpVPC5HOtbNpP-nmCR-chnDLc4f7CTwl8CF1nM5PlvLPMSDyZIT32n1yp6nywwyZ1VB~cLI4jYMrXtfkPq5mWAG9LDLGrvD-eZxTMP5Ftp8056edLYDB14K89BHudBMXlMbk5rpyHRCRGUOyI56Ts~sWeVnYCutFQdPco8G~sENLCkEfzQhPtcfbD0LYJaG9Z95OXJatiMNurxU31sBi-dSQvlFgZiaXpKgrYgP~vxXlq46~nJrmXrug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            </Row>
            <Row  className="profile-nav-bar">
                <NavItem to="/tableware" className="nav-item" activeClassName="nav-item--active">
                    Tableware
                </NavItem>
                <NavItem to="/cookware" className="nav-item" activeClassName="nav-item--active">
                    Cookware
                </NavItem>
                <NavItem to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                    Home accessories
                </NavItem>
                <NavItem to="/lighting" className="nav-item" activeClassName="nav-item--active">
                    Lighting
                </NavItem>
                <NavItem to="/textile" className="nav-item" activeClassName="nav-item--active">
                    Textile
                </NavItem>
                <NavItem to="/furniture" className="nav-item" activeClassName="nav-item--active">
                    Furniture
                </NavItem>
                <Link to="/ShoppingCart" className="header-cart-summary" >
                    <CartIcon size={32} />
                    <p className="cart-summary-text"> Shopping bag </p>
                </Link>
            </Row>
        </Row>
    )
}