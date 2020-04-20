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
                    ...GatsbyImageSharpFluid
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
            <div className={footerStyles.containerRight}>
                <div className={footerStyles.footerSection}>
                    <Link to="/about" className={footerStyles.link}>
                        <small className={footerStyles.list}>About</small>
                    </Link>
                    <small>/</small>
                    <Link to="/careers" className={footerStyles.link}>
                    <small className={footerStyles.list}>Careers</small>
                    </Link>
                    <small>/</small>
                    <Link to="/projects" className={footerStyles.link}>
                    <small className={footerStyles.list}>Projects</small>
                    </Link>
                    <small>/</small>
                    <a
                    href="https://placy.typeform.com/to/lfzKCU"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <small className={footerStyles.list}>Contact</small>
                    </a>
                </div>
                <div className={footerStyles.footerSection} style={{textTransform:"uppercase", flexWrap:"wrap"}}>
                    <a href="./document/term_of_use.pdf" target="_blank" rel="noopener noreferrer">
                        <small className={footerStyles.list}>terms & conditions</small>
                    </a>          
                    <a href="./document/privacy_policy.pdf" target="_blank" rel="noopener noreferrer">
                        <small className={footerStyles.list}>privacy policy</small>
                    </a>
                    <small className={footerStyles.list} style={{marginLeft:"1rem"}}>&copy; placy 2020</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer;