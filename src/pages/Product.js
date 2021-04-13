import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store"


const { Header, Content, Footer } = Layout;

function Product({ match }) {
   const { dispatch } = useContext(StoreContext);   
   useEffect(() => setProductDetail(dispatch, match.params.productId, 0, match.params.category),[])

   return (
      <Layout className="bg-gray main-layout">
         <Header style={{ position: 'fixed', zIndex: 1, width:'100%'}} className="layout-header">
            <AppHeader title="Product Detail" />
         </Header>
         <Layout className="bg-gray">
         <Content className="layout-content">
         <ProductDetail />
         </Content>
         <Footer className="layout-footer">
            <AppFooter />
         </Footer>
         </Layout>
      </Layout>
   );
}

export default Product;
