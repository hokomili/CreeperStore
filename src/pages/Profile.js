import { useContext, useEffect } from "react";
import { Layout ,Row } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store"
import ProfileNav from "../components/ProfileNav";

import {getTitle} from "../utils/index"
import {setPage} from "../actions"


const { Header, Content, Footer } = Layout;

function Profile({ match }) {
    const { state: { page: { title } }, dispatch } = useContext(StoreContext);

    useEffect(() => {
      const url = window.location.pathname;
      setPage(dispatch, url, getTitle(url))
    }, []);
   return (
      <Layout className="bg-gray main-layout">
            <Header style={{ position: 'fixed', zIndex: 1, width:'100%'}} className="layout-header">
                <AppHeader title="Product Detail" />
            </Header>
            <Layout  className="bg-gray">
                <ProfileNav />
                <Content className="layout-content">
                    <ProductList/>
                </Content>
                <Footer className="layout-footer">
                    <AppFooter />
                </Footer>
            </Layout>
      </Layout>
   );
}

export default Profile;