import { Layout } from 'antd';
import ProductHeader from "../components/ProductHeader"
import PdFooter from "../components/ProductFooter"
import NavBar from "../components/NavBar";
import ProductNav from "../components/ProductNav";
import ProductList from "../components/ProductList";

function Maps() {
  return (
    <Layout className="container">
        <NavBar />
        <ProductHeader/>
        <ProductNav/>
        <ProductList/>
        <PdFooter/>  
    </Layout>
  );
}

export default Maps;
