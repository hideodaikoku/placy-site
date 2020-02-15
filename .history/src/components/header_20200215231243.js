import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/header.module.scss";

const Header = () => {
    return(
        <div>
            <div className={headerStyles.logo}>
            <h1>Placy</h1>
            </div>
            <nav className={headerStyles.nav}>
                <ul>
                    <li className={headerStyles.list}>
                        <Link className={headerStyles.link} to="/about">about</Link>
                    </li>
                    <li className={headerStyles.list}>
                        <Link className={headerStyles.link} to="/careers">careers</Link>
                    </li>
                    <li className={headerStyles.list}>
                        <Link className={headerStyles.link} to="/consulting">consulting</Link>
                    </li>
                    <li className={headerStyles.list}>
                        <Link className={headerStyles.link} to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header