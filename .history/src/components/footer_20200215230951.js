import React from "react";
import { Link } from "gatsby";
import footerStyles from "../styles/footer.module.scss";
const Footer = () => {
    return(
        <footer>
            <div className={footerStyles.container}>
                <ul>
                    <Link to="/about" className={footerStyles.link}>
                        <li className={footerStyles.list}><small>about</small></li>
                    </Link>
                    <Link to="/careers" className={footerStyles.link}>
                        <li className={footerStyles.list}><small>careers</small></li>
                    </Link>
                    <Link to="/consulting" className={footerStyles.link}>
                        <li className={footerStyles.list}><small>consulting</small></li>
                    </Link>
                    <Link to="/contact" className={footerStyles.link}>
                        <li className={footerStyles.list}><small>contact</small></li>
                    </Link>
                </ul>
            </div>
            <div className={footerStyles.containerRight}>
                <ul>
                    <li className={footerStyles.list}><small>terms & conditions</small></li> 
                    <li className={footerStyles.list}><small>privacy policy</small></li>
                    <li className={footerStyles.list}><small>&copy</small></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;