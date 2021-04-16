import { Layout } from 'antd';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import Forget from"../components/Forget";
import {AuthProvider} from "../store/AuthContext"

const { Header, Content, Footer } = Layout;

function FP() {
    return (
      <AuthProvider>
      <Layout className="container main-layout">
         <Layout className="bg-gray">     
            <Header className="layout-header">
               <AppHeader title="Shopping Cart" />
            </Header>
            <Content className="layout-content">
                <Forget />
            </Content>
            <Footer className="layout-footer">
               <AppFooter />
            </Footer>
         </Layout>
      </Layout>
      </AuthProvider>
   );
}

export default FP;
