import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/header.module.scss";

const Header = () => {
    return(
        <div>
            <h1>Placy</h1>
            <nav>
                <ul>
                    <li><Link className={headerStyles.link} to="/about">about</Link></li>
                    <li><Link className={headerStyles.link} to="/careers">careers</Link></li>
                    <li><Link className={headerStyles.link} to="/consulting">consulting</Link></li>
                    <li><Link className={headerStyles.link} to="/contact">contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header