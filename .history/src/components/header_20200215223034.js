import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
    return(
        <div>
            <h1>Placy</h1>
            <nav>
                <ul>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/careers">careers</Link></li>
                    <li><Link to="/consulting">consulting</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header