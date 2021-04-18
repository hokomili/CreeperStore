import { Select } from "antd";
import { Row, Col } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store"
import { addCartItem, removeCartItem, setProductDetail } from "../actions";
import Mybagbom from "../images/mybagbom.png"
import Mybagimg from "../images/shopbag.png"
const { Option } = Select;

export default function MybagContent() {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);
   async function download(){
      console.log("notdone")
   }
   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   return (
      <div>
         <div className="mybag-title">My Bag</div>
         <div className="mybag-content mybag-flex">
            <Col span={6}>
            <img src={Mybagimg} alt="" className="mybag-img"></img>
            </Col>

            {/*cartitem*/}

            <Col span={18}>
               <Row gutter={[32, 32]}>
                  {cartItems.length === 0 ? (
                     <div>Cart is empty</div>
                  ) : (
                     cartItems.map(item => (
                        <Col>
                           <li key={item.id} className="cart-item">
                              <Link to={`/products/${item.category}/${item.id}`}>
                                 <div className="cart-image" onClick={()=>{
                                    setProductDetail(dispatch, item.id, item.qty);
                                 }}>
                                    <img src={item.image} alt={item.name} />
                                 </div>
                              </Link>
                              <div className="cart-item-content">
                                 <div className="cart-name cart-mr">{item.name}</div>
                                 <div className="product-qty">
                                    Qty: {"   "}
                                    <Select
                                       defaultValue={item.qty}
                                       value={item.qty}
                                       className="select-style"
                                       onChange={(qty) => addCartItem(dispatch, item, qty)}
                                    >
                                       {[...Array(item.countInStock).keys()].map((x) => (
                                          <Option key={x + 1} value={x + 1}>
                                             {x + 1}
                                          </Option>
                                       ))}
                                    </Select>
                                 </div>
                              </div>
                              <div className="cart-item-end">
                                 <div className="cart-price">
                                    ${item.price * item.qty}
                                 </div>
                                 <div className="cart-item-delete" 
                                    onClick={() => {
                                       removeCartItem(dispatch, item.id);
                                       //firebase.remove
                                    }}
                                 >
                                    x
                                 </div>
                              </div>

                           </li>
                        </Col>
                     ))
                  )}
               </Row>
               <Row>
                  <div className="pddel-text-bottom" style={{cursor:"pointer"}} onClick={download}>
                     <h1>Download All </h1>
                  </div>
               </Row>
            </Col>

            {/*cartitem*/}
            
         </div>
            <div><img src={Mybagbom} alt="" className="mybag-bomimg"></img></div>
            <div className="mybag-bomimg-color"></div>
      </div>
   );
}