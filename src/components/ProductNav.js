import All from '../images/all-ico.png';
import Trending from '../images/trending-ico.png';
import Latest from '../images/latest-ico.png';
import View from '../images/view-ico.png';
import Download from '../images/download-ico.png';

import { NavLink } from 'react-router-dom';



    const url = window.location.pathname;
export default function ProductNav({title}) {
    return (
        
        <div className="pnav-bar">
            <div className="pnav-search">
                <NavLink to={url} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={All} alt="All" className="pnav-search-img"></img>
                    <div className="pnav-search-text">ALL</div>
                    <div className="pnav--inactive"></div>
                </NavLink>
                <NavLink to={url+'/Trending'} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={Trending} alt="Trending" className="pnav-search-img  f01"></img>
                    <div className="pnav-search-text">TRENDING</div>
                    <div className="pnav--inactive"></div>
                </NavLink>
                <NavLink to={url+'/Latest'} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={Latest} alt="Latest" className="pnav-search-img f02"></img>
                    <div className="pnav-search-text">LATEST</div>
                    <div className="pnav--inactive"></div>
                </NavLink>
                <NavLink to={url+'/Views'} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={View} alt="View" className="pnav-search-img"></img>
                    <div className="pnav-search-text">VIEWS</div>
                    <div className="pnav--inactive"></div>
                </NavLink>
                <NavLink to={url+'/Downloads'} className="pnav-search-block" activeClassName="pnav-search-block--active">
                    <img src={Download} alt="Download" className="pnav-search-img"></img>
                    <div className="pnav-search-text">DOWNLOADS</div>
                    <div className="pnav--inactive"></div>
                </NavLink>

            </div>
        </div>

    );
 }