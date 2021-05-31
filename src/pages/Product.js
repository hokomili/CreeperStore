import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import ProductDetail from "../components/ProductDetail";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store"
import ProductHeader from "../components/ProductHeader"
import PdFooter from "../components/ProductFooter"
import NavBar from "../components/NavBar";

function Product({ match }) {
   const { dispatch } = useContext(StoreContext);  
   //useEffect(() => setProductDetail(dispatch, match.params.productId, 0, 0),[])
   return (
      <Layout className="container">
         <NavBar />
         <ProductHeader/>
         <ProductDetail />
         <PdFooter/>
      </Layout>
   );
}

export default Product;
