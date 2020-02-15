import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return(
        <Layout>
            <p>Placy is a spatial data company.</p>
            <p>We identify underlying value of your space by uncovering unseen spatial parameters. </p>
            <p><Link to="/contact">Contact Us</Link></p>
        </Layout>
    )
}

export default AboutPage