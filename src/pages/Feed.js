import { Layout } from 'antd';
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";
import Feeder from "../components/Feeder";

function Feed() {
  return (
    <Layout className="container">
        <NavBar />
        <Feeder />
        <Footer/>  
    </Layout>
  );
}

export default Feed;
