import { Layout } from 'antd';
import ProductHeader from "../components/ProductHeader"
import PdFooter from "../components/ProductFooter"
import NavBar from "../components/NavBar";
import ProductNav from "../components/ProductNav";
import ProductList from "../components/ProductList";
import {useContext,useEffect} from "react"
import { StoreContext } from "../store";
import { setPage } from "../actions";
import {getTitle} from "../utils"
function Category() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);
    useEffect(() => {
      const url = window.location.pathname;
      setPage(dispatch, url, getTitle(url))
    }, []);
  return (
    <Layout className="container">
        <NavBar />
        <ProductHeader/>
        <ProductNav />
        <ProductList/>
        <PdFooter/>  
    </Layout>
  );
}

export default Category;
