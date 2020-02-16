import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const AboutPage = () => {
    return(
        <Layout>
            <p>Placy is a spatial data company.</p>
            <p>We identify underlying value of your space by uncovering unseen spatial parameters. </p>
            <p><Link to="/contact">Contact Us</Link></p>
            <Img />
        </Layout>
    )
}

export default AboutPage