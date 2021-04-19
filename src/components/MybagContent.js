import { Select } from "antd";
import { Row, Col } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store"
import { addCartItem, removeCartItem, setProductDetail } from "../actions";
import Mybagbom from "../images/mybagbom.png"
import Mybagimg from "../images/shopbag.png"
import Delete from "../images/delete.png"
import Item from "antd/lib/list/Item";
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
            {/* <Col span={6}> */}
            <img src={Mybagimg} alt="" className="mybag-img"></img>
            {/* </Col> */}

            {/*cartitem*/}
            <div className="mybag-content-item">
            <Row span={18} className="mybag-content-item-iner">
               <Col gutter={[32, 32]}>
                  {cartItems.length === 0 ? (
                     <div className="bagempty-text ">BAG is Empty</div>
                     
                  ) : (
                     cartItems.map(item => (
                        <Row span={7}>
                           <div key={item.id} className="cart-item">
                              <div><Link to={`/products/${item.category}/${item.id}`}>
                                 <div className="cart-image" onClick={()=>{
                                    setProductDetail(dispatch, item.id, item.version,item.edition);
                                 }}>
                                    <img src={item.image} alt={item.image_info}  className="item-image"/>
                                 </div>
                              </Link></div>
                              <div className="cart-item-content">
                                 <div className="cart-name cart-mr">{item.title}</div>
                                 <div className="product-qty">
                                    Version: {"   "}
                                    {item.version?
                                    <Select
                                       defaultValue={item.version[item.ver]}
                                       value={item.ver}
                                       className="select-style"
                                       onChange={(vers) => addCartItem(dispatch, item, vers,item.edi)}
                                    >
                                       {[...Array(item.version.length).keys()].map((x) => (
                                          <Option key={x} value={x}>
                                             {item.version[x]}
                                          </Option>
                                       ))}
                                    </Select>:0}
                                    Edition:{"   "}
                                    {item.edition?
                                    <Select
                                       defaultValue={item.edition[item.edi]}
                                       value={item.edi}
                                       className="select-style"
                                       onChange={(edit) => addCartItem(dispatch, item ,item.ver, edit)}
                                    >
                                       {[...Array(item.edition.length).keys()].map((x) => (
                                          <Option key={x} value={x}>
                                             {item.edition[x]}
                                          </Option>
                                       ))}
                                    </Select>:0}
                                 </div>
                              </div>
                              <div className="cart-item-end">
                                 {/* <div className="cart-price">
                                    ${item.price * item.qty}
                                 </div> */}
                                 <div className="cart-item-delete" 
                                    onClick={() => {
                                       removeCartItem(dispatch, item.id);
                                       //firebase.remove
                                    }}
                                 >
                                    <img src={ Delete} alt="" className="delete"/>
                                 </div>
                              </div>

                           </div>
                        </Row>
                     ))
                  )}
               </Col>
            </Row>
            <div className="pddel-text-bottom " style={{cursor:"pointer"}} onClick={download}>
                     <h1>Download All </h1>
            </div>
            </div>
            {/*cartitem*/}
            
         </div>
            <div><img src={Mybagbom} alt="" className="mybag-bomimg"></img></div>
            <div className="mybag-bomimg-color"></div>
      </div>
   );
}