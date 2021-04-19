export default function ProductHeader({title}) {
   const url = window.location.pathname;
    return (
       <div className="header">
            <div className={url.slice(0,4)==='/Map'?
                     "ph-bg":url.slice(0,4)==='/Tex'?"ph2-bg":"ph3-bg"}>
                   </div>
          <div className="ph-box">
             <div className="ph-text">{url.slice(0,4)==='/Map'?
                     "Maps":url.slice(0,4)==='/Tex'?"Texture Packs":"Mods"}</div>
          </div>
 
       </div>
    );
 }