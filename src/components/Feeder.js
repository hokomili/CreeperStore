import { useContext } from "react";
import { Card, Button } from "antd";
import { feedJSONToFirebase,feedJSON2ToFirebase,feedJSON3ToFirebase,feedJSON4ToFirebase,feedJSON5ToFirebase } from "../actions"
import { StoreContext } from "../store";

export default function Feeder() {
   const { state: { feedProducts: { loading } }, dispatch } = useContext(StoreContext);

   return (

      <div className="feed">
         <Card className="feed-item">
            <div className="feed-item__content">
               <h2 className="feed-item__name">Feed JSON data to FireStore</h2>
            </div>
            {loading
               ? (
                  <Button
                     className="cart-modal-btn"
                     type="primary"
                     onClick={() => feedJSONToFirebase(dispatch)}
                     loading
                  >
                     <span style={{ marginLeft: 12 }}>Feed</span>
                  </Button>
               ) : (
                  <div>
                     <Button
                        className="cart-modal-btn"
                        type="primary"
                        onClick={() => feedJSONToFirebase(dispatch)}
                     >
                        <span style={{ marginLeft: 12 }}>Feed</span>
                     </Button>
                     <Button
                        className="cart-modal-btn"
                        type="primary"
                        onClick={() => feedJSON2ToFirebase(dispatch)}
                     >
                        <span style={{ marginLeft: 12 }}>maps</span>
                     </Button>
                     <Button
                        className="cart-modal-btn"
                        type="primary"
                        onClick={() => feedJSON3ToFirebase(dispatch)}
                     >
                        <span style={{ marginLeft: 12 }}>texture</span>
                     </Button>
                     <Button
                        className="cart-modal-btn"
                        type="primary"
                        onClick={() => feedJSON4ToFirebase(dispatch)}
                     >
                        <span style={{ marginLeft: 12 }}>mod</span>
                     </Button>
                     <Button
                        className="cart-modal-btn"
                        type="primary"
                        onClick={() => feedJSON5ToFirebase(dispatch)}
                     >
                        <span style={{ marginLeft: 12 }}>media</span>
                     </Button>
                  </div>
               )}
         </Card>
      </div>

   );
}

