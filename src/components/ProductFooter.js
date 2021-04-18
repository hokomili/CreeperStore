import fb from '../images/pd-fb-ico.png';
import ig from '../images/pd-ig-ico.png';
import twr from '../images/pd-twr-ico.png';
import flogo from '../images/foot-logo.png';
export default function ProductFooter() {
    return (
        <footer className="pd-footer">
            
            <div className="pd-footer-between"></div>
            
            <div className="pd-footer-social-area">
                <img src={fb} alt="fb" className="footer-social-icon"></img>
                <img src={ig} alt="ig" className="footer-social-icon"></img>
                <img src={twr} alt="twitter" className="footer-social-icon"></img>
            </div>
            <div className="footer-foot-area">
            <img src={flogo} alt="twitter" className="footer-foot-logo"></img>
            </div>
        </footer>           
    );
}