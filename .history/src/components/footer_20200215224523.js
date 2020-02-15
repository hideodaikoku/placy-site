import React from "react";
import footerStyles from "../styles/footer.module.scss";

const Footer = () => {
    return(
        <footer>
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