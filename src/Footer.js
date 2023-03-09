import logo from './logo/logo.png';
import jslogo from './logo/js-logo.png';
import reactlogo from './logo/react-logo.png';
import sasslogo from './logo/sass-logo.png';
import nodelogo from './logo/node-logo.png';
import csslogo from './logo/css-logo.png';

function Footer() {
    //const title = "THIS WEBSITE IS POWERED BY  :        ";

    return(
        <div className="footer" >
            <div className="footer-title">Created from scratch with <big> ♡ </big> </div>
            <div className="footer-logos">
                <div className="logo"><img src={reactlogo} alt="react"/></div>
                <div className="logo"><img src={nodelogo} alt="node"/></div>
                <div className="logo"><img src={sasslogo} alt="sass"/></div>
                <div className="logo"><img src={jslogo} alt="JS"/></div>
                <div className="logo"><img src={csslogo} alt="css"/></div>
            </div>
        </div>
    );

    /*          
                <div className="logo"><img src={reactlogo} alt="react"/></div>
                <div className="logo"><img src={nodelogo} alt="node"/></div>
                <div className="logo"><img src={sasslogo} alt="sass"/></div>
                <div className="logo"><img src={jslogo} alt="JS"/></div>
                <div className="logo"><img src={csslogo} alt="css"/></div>
    
    
                <img src={reactlogo} alt="react"/>
                <img src={nodelogo} alt="node"/>
                <img src={sasslogo} alt="sass"/>
                <img src={jslogo} alt="JS"/>
                <img src={csslogo} alt="css"/> */
}

export default Footer;