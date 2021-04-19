import { useState,useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";
import down from '../images/small-download-ico.png';
import favor from '../images/small-favor-ico.png';
import like from '../images/small-like-ico.png';
import view from '../images/small-view-ico.png';
import cross from '../images/small-cross-ico.png'
import PrivateRoute from "./PrivateRoute";
import {useAuth} from "../store/AuthContext"
import {delet} from "../api"

    
export default function ProductItem({ product }) {
    const {currentUser,likestate}=useAuth()
    const url=window.location.pathname;
    const {liked,setlike}=useState(likestate(product.id));
    const { dispatch } = useContext(StoreContext);
    const history=useHistory()
    function dolike(){
        if(!liked){
            setlike(true)
        }
    }
    async function del(produc){
        const result=await delet(produc)
        history.go(0)
    }
    return (
        <div className="pd-block">
            <Link to={`/products/${product.category}/${product.id}`} 
                onClick={()=>{
                setProductDetail(dispatch, product.id, 0,0);
                }}
            >
                <img src={product.image} alt={product.image_info} className="pd-img"/>
            </Link>
            <div className="pd-text-block">
                <div className="pd-text-title">{product.title}</div>
                <div className="pd-text-maker">By {product.author}</div>
                <div className="pd-text-bottom-area">
                    <div className="pd-text-bottom-view ff">
                        <img src={view} alt="view"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.views}</div>
                    </div>
                    <div className="pd-text-bottom-like ff">
                        <img src={like} alt="like"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.like}</div>
                    </div>
                    <div className="pd-text-bottom-favor ff">
                        <img src={favor} alt="favor"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.favorite}</div>
                    </div>
                    <div className="pd-text-bottom-down ff">
                        <img src={down} alt="down"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.downloads}</div>
                    </div>
                    {url==="/Admin"&&
                        <PrivateRoute>
                            <div onClick={()=>{del(product)}} className="pd-text-bottom-cross ff">
                                <img src={cross} alt="down"className="pd-text-bottom-icon"/>
                            </div>
                        </PrivateRoute>
                    }
                    {url!=="/Admin"&&currentUser&&
                        <PrivateRoute>
                            <div onClick={()=>dolike} className="pd-text-bottom-favor ff">
                                <img src={favor} alt="favor"className="pd-text-bottom-icon"/>
                            </div>
                        </PrivateRoute>
                    }
                </div>
            </div>
        </div>
    );
}
