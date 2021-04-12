import { Layout } from 'antd';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import Signup from"../components/Signup";
import {AuthProvider} from "../store/AuthContext"

const { Header, Content, Footer } = Layout;

function SignOn() {
    return (
      <AuthProvider>
      <Layout className="container main-layout">
         <Layout className="bg-gray">     
            <Header className="layout-header">
               <AppHeader title="Shopping Cart" />
            </Header>
            <Content className="layout-content">
                <Signup />
            </Content>
            <Footer className="layout-footer">
               <AppFooter />
            </Footer>
         </Layout>
      </Layout>
      </AuthProvider>
   );
}

export default SignOn;
