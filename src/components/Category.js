import { Card } from "antd"
import { Link } from 'react-router-dom';
import { Row, Col } from "antd";

export default function Category() {
  return (
    <Row gutter={[32, 32]}>
        <Col 
          key={1} 
          lg={{ span: 12 }} 
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
            <Card className="bg-gray product">
                <Link to="/product/cookware/">
                    <img
                        style={{ width: '200px', height:'200px'}}
                        src=""
                        alt="" />
                </Link>
            </Card>
            </Col>
            <Col 
          key={2} 
          lg={{ span: 12 }} 
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
            <Card className="bg-gray product">
                <Link to="/product/furniture">
                    <img
                        style={{ width: '200px' ,height:'200px'}}
                        src=""
                        alt="" />
                </Link>
            </Card>
            </Col>
            <Col 
          key={3} 
          lg={{ span: 12 }} 
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
            <Card className="bg-gray product">
                <Link to="product/lighting">
                    <img
                        style={{ width: '200px' ,height:'200px'}}
                        src=""
                        alt="" />
                </Link>
            </Card>
        </Col>
    </Row>
  );
}