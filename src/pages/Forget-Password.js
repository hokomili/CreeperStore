import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import BottomFooter from "../components/BootomFooter";
import Forget from"../components/Forget";

function FP() {
    return (
      <Layout className="container">
        <NavBar />
        <Forget/>
        <BottomFooter/>  
      </Layout>
   );
}

export default FP;
