import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import Sign from"../components/Sign";

const { Header, Content, Footer } = Layout;

function SignIn() {
    return (
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
   );
}

export default SignIn;
