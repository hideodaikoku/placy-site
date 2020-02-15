import React from "react";
import footerStyles from "../styles/footer.module.scss";

const Footer = () => {
    return(
        <footer className={footerStyles.container}>
            <small>Terms and Conditions</small><br/>
            <small>Privacy Policy</small>
        </footer>
    )
}

export default Footer;