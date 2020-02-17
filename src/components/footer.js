import React from "react";
import { Link } from "gatsby";
import footerStyles from "../styles/footer.module.scss";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
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
        <footer className={footerStyles.footerContainer}>
            <div className={footerStyles.container}>
                <Img fluid={data.file.childImageSharp.fluid} className={footerStyles.image}/>
            </div>
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
                    <li className={footerStyles.list}><small>&copy; placy 2020</small></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;