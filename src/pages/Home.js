import { useContext,useEffect } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppContent from "../components/Content"
import AppFooter from "../components/Footer"
import { StoreContext } from "../store"
import {getTitle} from "../utils/index"
import {setPage} from "../actions"

const { Header, Content, Footer } = Layout;

function Home() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);
  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
  }, []);
  return (
    <Layout className="bg-gray main-layout">
        <Header style={{ position: 'fixed', zIndex: 1, width:'100%'}} className="layout-header">
          <AppHeader title={title} />
        </Header>
        <Layout className="bg-gray">
        <Content className="layout-content">
          <AppContent />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
        </Layout>
    </Layout>
  );
}

export default Home;
