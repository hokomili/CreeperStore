
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import CartDetail from "../components/CartDetail";

const { Header, Content, Footer } = Layout;

function ShoppingCart() {
   return (
      <Layout className="container main-layout">
         <Layout className="bg-gray">     
            <Header className="layout-header">
               <AppHeader title="Shopping Cart" />
            </Header>
            <Content className="layout-content">
               <CartDetail />
            </Content>
            <Footer className="layout-footer">
               <AppFooter />
            </Footer>
         </Layout>
      </Layout>
   );
}

export default ShoppingCart;
