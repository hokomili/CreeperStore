import { Link } from 'react-router-dom';
import nlogo from "../images/logo.png";
import nmember from "../images/nav-member.png";
import nbag from "../images/nav-shopbag.png";
import nstore from "../images/nav-store.png";
import nsearch from "../images/nav-search.png";
import { useContext } from "react";
import { StoreContext } from "../store";
import { Badge } from "antd";
import {useAuth} from "../store/AuthContext"


export default function NavBar() {
    const {currentUser}=useAuth()
    const { state: { cartItems } } = useContext(StoreContext);

    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;
    return (
        <div className="nav-bar hideUp">
            
        <div className="navbar-l">
            <Link to='/'>
                <img src ={nlogo} alt="nav-logo" className="navbar-logo"></img>
            </Link>
            <div className="navbar-search">
                <div className="navsearch-text">Search Creeper Store</div>
                <img src ={nsearch} alt="nsearch" className="navbar-searchicon"></img>
            </div>
        </div>

            <div className="navbar-r">
           
            <img src ={nstore} alt="nstore" className="navbar-icon"></img>
            {currentUser?
                <Link to="/Profile" >
                    <img src ={nmember} alt="nmember" className="navbar-icon" />
                </Link>
                :
                <Link to="/Login"  >
                    <img src ={nmember} alt="nmember" className="navbar-icon" />
                </Link>
            }
            <Link to="/Shopbag" >
                <Badge count={count} size={"small"} style={{ color: 'white', backgroundColor: '#6366F2' }}>
                    <img src ={nbag} alt="nbag" className="navbar-icon" />
                </Badge>
            </Link>
            </div>
        </div>
    );
}