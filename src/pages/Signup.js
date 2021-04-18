import { Layout } from 'antd';
import Signupcontent from "../components/Signup"
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";

function Signup() {
  return (
    <Layout className="container">
        <NavBar />
        <Signupcontent/>
        <Footer/>  
    </Layout>
  );
}

export default Signup;