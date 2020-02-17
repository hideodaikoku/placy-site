import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/header.module.scss";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "placy-logo.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)
    return(
        <div className={headerStyles.header}>
            <div className={headerStyles.logoArea}>
                <Link className={headerStyles.title} to="/">
                    <Img fluid={data.file.childImageSharp.fluid} className={headerStyles.topImg}/>
                </Link>
            </div>
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.navList}>
                    <li className={headerStyles.listItem}>
                        <Link 
                            className={headerStyles.link} 
                            activeClassName={headerStyles.activeNavItem}
                            to="/about">
                                about
                        </Link>
                    </li>
                    <li className={headerStyles.listItem}>
                        <Link 
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeNavItem} 
                            to="/careers">
                                careers
                        </Link>
                    </li>
                    <li className={headerStyles.listItem}>
                        <Link 
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeNavItem}
                            to="/consulting">
                                consulting
                        </Link>
                    </li>
                    <li className={headerStyles.listItem}>
                        <Link
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeNavItem}
                            to="/contact">
                                contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header