import All from '../images/all-ico.png';
import Trending from '../images/trending-ico.png';
import Latest from '../images/latest-ico.png';
import View from '../images/view-ico.png';
import Download from '../images/download-ico.png';
import {useHistory} from 'react-router-dom';
import {getTitle} from "../utils"
import { useState}from "react"

export default function ProductNav() {
    const url = window.location.pathname;
    const category=getTitle(url)
    const [ loading,setLoading] = useState(false)
    const history=useHistory()
    function clicking(to){
        setLoading(true)
        history.push('../'+category+to)
        setLoading(false)
        history.go(0)
        
    }
    return (
        
        <div className="pnav-bar">
            <div className="pnav-search">
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
            </div>
        </div>

    );
 }