import { Layout } from 'antd';
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";
import ProductCreater from "../components/ProductCreater"

function FormFeeder() {
  return (
    <Layout className="container">
        <NavBar />
        <ProductCreater />
        <Footer/>  
    </Layout>
  );
}

export default FormFeeder;