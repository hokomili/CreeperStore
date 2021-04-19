import down from '../images/small-download-ico.png';
import favor from '../images/small-favor-ico.png';
import like from '../images/small-like-ico.png';
import view from '../images/small-view-ico.png';
import Blike from '../images/pddel-like-big-ico.png';
import Bfavor from '../images/pddel-favor-big-ico.png';
import { useContext } from "react";
import { Select, Spin , Image } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";
import { Link } from 'react-router-dom';
const { Option } = Select;

function ProductDetail() {
   const { state: { productDetail: { product ,ver, edi}, requestProducts: { loading } }, dispatch } = useContext(StoreContext);
   const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;
   console.log(ver)
   return (
      <>
         {loading
            ? (
               <div className="spinner-wrap">
                  <Spin indicator={antIcon} className="spinner" />
               </div>
            ) : (
               <div className="pddel-content-big">
                  <Link to={'/'+product.category2}className="back-block">
                     <div className="back-bottom"></div>
                     <div className="back-text">BACK</div>                        
                  </Link>
                  <div className="pddel-content">
                     <div className="pddel-img-block">

                        <Image.PreviewGroup>
                           <Image alt="" className="pddel-main-image" src={product.image}/> 
                              <div className="pddel-small-img-block">
                                    <Image  alt="" className="pddel-small-image" src={product.dtlimg01}/> 
                                    <Image alt="" className="pddel-small-image" src={product.dtlimg02}/> 
                                    <Image alt="" className="pddel-small-image" src={product.dtlimg03}/> 
                              </div>
                        </Image.PreviewGroup>
                           

                     </div>
                     <div className="pddel-text-block">
                        <div className="pddel-text-title">{product.title}</div>
                        <div className="pddel-text-intro">{product.description}</div>
                        <div className="pddel-text-maker-area">
                              <img alt="" className="pddel-text-maker-img" src={product.author_image}></img>
                              <div className="pddel-text-maker-name">{product.author}</div>
                        </div>
                        <div className="pddel-text-list">
                              <div className="pddel-text-list-area">
                                 <img className="pddel-text-list-ico" alt="" src={view}></img>
                                 <div className="pddel-text-list-num">{product.views}</div>
                              </div>
                              <div className="pddel-text-list-area">
                                 <img className="pddel-text-list-ico" alt="" src={like}></img>
                                 <div className="pddel-text-list-num">{product.like}</div>
                              </div>
                              <div className="pddel-text-list-area">
                                 <img className="pddel-text-list-ico" alt="" src={favor}></img>
                                 <div className="pddel-text-list-num">{product.favorite}</div>
                              </div>
                              <div className="pddel-text-list-area">
                                 <img className="pddel-text-list-ico" alt="" src={down}></img>
                                 <div className="pddel-text-list-num">{product.downloads}</div>
                              </div>
                              
                        </div>
                        <div className="pddel-text-choose">
                           <div className="pddel-text-choose-area">
                              <div className="version-block">
                                 <div className="version-text">Version:</div>
                                 {product.version?
                                 <Select
                                    defaultValue={product.version[ver]}
                                    value={ver}
                                    className="select-style"
                                    onChange={(vert) => {setProductDetail(dispatch, product.id, vert, edi)
                                    console.log(vert)
                                    }
                                 
                                 }
                                 >
                                    {[...Array(product.version.length).keys()].map((x) => (
                                       <Option key={x} value={x}>
                                          {product.version[x]}
                                       </Option>
                                    ))}
                                 </Select>:0}

                              </div>
                              <div className="edition-block">
                                 <div className="edition-text">Edition:</div>
                                 {product.edition?
                                 <Select
                                    defaultValue={product.edition[edi]}
                                    value={edi}
                                    className="select-style"
                                    onChange={(edit) => setProductDetail(dispatch, product.id ,ver, edit)}
                                 >
                                    {[...Array(product.edition.length).keys()].map((x) => (
                                       <Option key={x} value={x}>
                                          {product.edition[x]}
                                       </Option>
                                    ))}
                                 </Select>:0}
                              </div>                            
                           </div>
                           <div>
                              <img src={Blike} alt="" className="pddel-like-bottom"/>
                              <img src={Bfavor} alt="" className="pddel-favor-bottom"/>                            
                           </div>
                        </div>
                        <AddToCart />
                     </div>
                  </div>
               </div>
            )
         }
      </>
   );
}

export default ProductDetail;