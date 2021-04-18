import { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";
import down from '../images/small-download-ico.png';
import favor from '../images/small-favor-ico.png';
import like from '../images/small-like-ico.png';
import view from '../images/small-view-ico.png';


export default function ProductItem({ product }) {
    const { dispatch } = useContext(StoreContext);
    return (
        <div className="pd-block">
            <Link to={`/products/${product.category}/${product.id}`} 
                onClick={()=>{
                setProductDetail(dispatch, product.id, 1);
                }}
            >
                <img src={product.image} alt={product.name} className="pd-img"/>
            </Link>
            <div className="pd-text-block">
                <div className="pd-text-title">{product.title}</div>
                <div className="pd-text-maker">By {product.maker}</div>
                <div className="pd-text-bottom-area">
                    <div className="pd-text-bottom-view ff">
                        <img src={view} alt="view"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.view}</div>
                    </div>
                    <div className="pd-text-bottom-like ff">
                        <img src={like} alt="like"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.good}</div>
                    </div>
                    <div className="pd-text-bottom-favor ff">
                        <img src={favor} alt="favor"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.favorite}</div>
                    </div>
                    <div className="pd-text-bottom-down ff">
                        <img src={down} alt="down"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.download}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
