import { useEffect, useContext } from "react";
import { notification } from "antd"
import { StoreContext } from "../store"
import { addCartItem } from "../actions";

export default function AddToCart() {
  const { state: { cartItems, productDetail: { product,ver,edi ,qty } }, dispatch } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: 'Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${ver}${product.title} ${qty > 1 ? "have" : "has"} been added to your bag.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    addCartItem(dispatch, product,ver,edi);
    //firebase.add
  };

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <div className="pddel-text-bottom" style={{cursor:"pointer"}} onClick={addToCart}>
      <h1>Add To Bag </h1>
    </div>
  );
}
