import React from "react";
import footerStyles from "../styles/footer.module.scss";

const Footer = () => {
    return(
        <footer className={footerStyles.container}>
            <div>
                <ul>
                    <li><small>Terms and Conditions</small></li> 
                    <li><small>Privacy Policy</small></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;