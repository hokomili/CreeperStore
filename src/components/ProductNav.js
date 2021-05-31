import All from '../images/all-ico.png';
import Trending from '../images/trending-ico.png';
import Latest from '../images/latest-ico.png';
import View from '../images/view-ico.png';
import Download from '../images/download-ico.png';
import {useHistory} from 'react-router-dom';
import {getTitle} from "../utils"
import { useState}from "react"
import{  Collapse  } from 'antd';

const { Panel } = Collapse;

export default function ProductNav() {
    const url = window.location.pathname;
    const category=getTitle(url)
    const [ loading,setLoading] = useState(false)
    const history=useHistory()
    function clicking(to){
        setLoading(true)
        if(to){
            history.push('/product/'+category+to)
        }
        else{
            history.push(category)
        }
        setLoading(false)
        history.go('/')
    }
    return (

        
        <div className="pnav-bar">
            
            <div className="pnav-search">
                <div onClick={()=>clicking(false)} style={{cursor:"Pointer"}} className="pnav-search-block">
                    <img src={All} alt="All" className="pnav-search-img"></img>
                    <div className="pnav-search-text">ALL</div>
                    <div className={"pnav--inactive "+((url.slice(-4)==="Maps"||url.slice(-8)==="Textures"||url.slice(-4)==="Mods")?"pnav-search-block--active":"")}></div>
                </div>
                <div onClick={()=>clicking('/Trending')} style={{cursor:"Pointer"}} className="pnav-search-block">
                    <img src={Trending} alt="Trending" className="pnav-search-img  f01"></img>
                    <div className="pnav-search-text">TRENDING</div>
                    <div className={"pnav--inactive "+((url.slice(-8)==="Trending")?"pnav-search-block--active":"")}></div>
                </div>
                <div onClick={()=>clicking('/Latest')} style={{cursor:"Pointer"}} className="pnav-search-block ">
                    <img src={Latest} alt="Latest" className="pnav-search-img f02"></img>
                    <div className="pnav-search-text">LATEST</div>
                    <div className={"pnav--inactive "+((url.slice(-6)==="Latest")?"pnav-search-block--active":"")}></div>
                </div>
                <div onClick={()=>clicking('/Views')} style={{cursor:"Pointer"}} className="pnav-search-block ">
                    <img src={View} alt="View" className="pnav-search-img"></img>
                    <div className="pnav-search-text">VIEWS</div>
                    <div className={"pnav--inactive "+((url.slice(-5)==="Views")?"pnav-search-block--active":"")}></div>
                </div>
                <div onClick={()=>clicking('/Downloads')} style={{cursor:"Pointer"}} className="pnav-search-block ">
                    <img src={Download} alt="Download" className="pnav-search-img"></img>
                    <div className="pnav-search-text">DOWNLOADS</div>
                    <div className={"pnav--inactive "+((url.slice(-9)==="Downloads")?"pnav-search-block--active":"")}></div>
                </div>
            </div>
            <Collapse accordion className="rwd-pnav">
                <Panel header="MENU" className="rwd-pnav-menu">
                <div onClick={()=>clicking('')} style={{cursor:"Pointer"}} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={All} alt="All" className="pnav-search-img"></img>
                    <div className="pnav-search-text">ALL</div>
                    <div className="pnav--inactive"></div>
                </div>
                <div onClick={()=>clicking('/Trending')} style={{cursor:"Pointer"}} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={Trending} alt="Trending" className="pnav-search-img  f01"></img>
                    <div className="pnav-search-text">TRENDING</div>
                    <div className="pnav--inactive"></div>
                </div>
                <div onClick={()=>clicking('/Latest')} style={{cursor:"Pointer"}} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={Latest} alt="Latest" className="pnav-search-img f02"></img>
                    <div className="pnav-search-text">LATEST</div>
                    <div className="pnav--inactive"></div>
                </div>
                <div onClick={()=>clicking('/Views')} style={{cursor:"Pointer"}} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={View} alt="View" className="pnav-search-img"></img>
                    <div className="pnav-search-text">VIEWS</div>
                    <div className="pnav--inactive"></div>
                </div>
                <div onClick={()=>clicking('/Downloads')} style={{cursor:"Pointer"}} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={Download} alt="Download" className="pnav-search-img"></img>
                    <div className="pnav-search-text">DOWNLOADS</div>
                    <div className="pnav--inactive"></div>
                </div>
                </Panel>

            </Collapse>
        </div>

    );
 }