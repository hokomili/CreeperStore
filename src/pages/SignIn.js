import { Layout } from 'antd';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import Sign from"../components/Sign";
import {AuthProvider} from "../store/AuthContext"

const { Header, Content, Footer } = Layout;

function SignIn() {
    return (
    <AuthProvider>
      <Layout className="container main-layout">
         <Layout className="bg-gray">     
            <Header className="layout-header">
               <AppHeader title="Shopping Cart" />
            </Header>
            <Content className="layout-content">
                <Sign />
            </Content>
            <Footer className="layout-footer">
               <AppFooter />
            </Footer>
         </Layout>
      </Layout>
      </AuthProvider>
   );
}

export default SignIn;
