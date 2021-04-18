import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppContent from "../components/Content"
import NavBar from "../components/NavBar";
import AppFooter from "../components/Footer"

function Home() {
  return (
    <Layout className="container">
        <NavBar />
        <AppHeader />
        <AppContent/>
        <AppFooter/>  
    </Layout>
  );
}

export default Home;
