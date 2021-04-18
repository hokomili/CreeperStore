import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Forget from"../components/Forget";

function FP() {
    return (
      <Layout className="container">
        <NavBar />
        <Forget/>
        <Footer/>  
      </Layout>
   );
}

export default FP;
