import { Layout } from 'antd';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import Signup from"../components/Signup";

const { Header, Content, Footer } = Layout;

function SignOn() {
    return (
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
   );
}

export default SignOn;
