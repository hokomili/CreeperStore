import { useContext,useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import ProductItem from "./ProductItem";
import { StoreContext } from "../store";
import { setPage } from "../actions";
import {getTitle} from "../utils"
export default function ProductList() {
  const { state: { page: { products }, requestProducts: { loading } },dispatch } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

    useEffect(() => {
      const url = window.location.pathname;
      setPage(dispatch, url, getTitle(url))
    }, []);

  return (
    <>
      {loading
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <div className="productlist-div">
          <Row gutter={[8, 16]}>
            {products.map(product => (
              <Col
                key={product.id}
                xl={{ span: 8 }}
                className="pd-block-outside"
              >
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>
          </div>
        )
      }
    </>
  );
}

