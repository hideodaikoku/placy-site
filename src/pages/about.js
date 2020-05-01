import React from "react"
import Layout from "../components/layout"

import AboutContent from "../components/about-content.js";
import Head from "../components/head";
import SEO from "../components/seo";

const AboutPage = () => {
    return(
        <Layout>
            <Head/>
            <SEO/>
            <AboutContent/>
        </Layout>
    )
}

export default AboutPage;