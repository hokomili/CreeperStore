import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function News({ product }) {
    return (
        <Card style={{width:'100%' ,textAlign:'center',fontSize:'50px'}}>
            <Link to="/">
                news
            </Link>
        </Card>
);}