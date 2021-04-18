import { Layout } from 'antd';
import Logincontent from "../components/Logincontent"
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";

function Login() {
  return (
    <Layout className="container">
        <NavBar />
        <Logincontent/>
        <Footer/>  
    </Layout>
  );
}

export default Login;
