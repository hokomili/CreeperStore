import { Layout } from 'antd';
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";
import Feeder from "../components/Feeder";
import AdminController from "../components/AdminController"

function Feed() {
  return (
    <Layout className="container">
        <NavBar />
        <Feeder />
        <AdminController />
        <Footer/>  
    </Layout>
  );
}

export default Feed;
