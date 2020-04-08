import React from "react"
import Layout from "../components/layout"

import AboutContent from "../components/about-content.js";
import Head from "../components/head";

const AboutPage = () => {
    return(
        <Layout>
            <Head/>
            <AboutContent/>
        </Layout>
    )
}

export default AboutPage;