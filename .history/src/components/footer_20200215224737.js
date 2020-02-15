import React from "react";
import footerStyles from "../styles/footer.module.scss";

const Footer = () => {
    return(
        <footer>
            <div>
                <ul>
                    <Link to="/about">
                        <li className={footerStyles.list}><small>Terms and Conditions</small></li>
                    </Link> 
                    <li className={footerStyles.list}><small>Privacy Policy</small></li>
                </ul>
            </div>
            <div className={footerStyles.container}>
                <ul>
                    <li className={footerStyles.list}><small>Terms and Conditions</small></li> 
                    <li className={footerStyles.list}><small>Privacy Policy</small></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;