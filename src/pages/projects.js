import React from "react"
import Layout from "../components/layout"

import ProjectContents from "../components/projectContents";

import Head from "../components/head";
import SEO from "../components/seo";

const ConsultingPage = () => {
    return(
        <Layout>
            <Head/>
            <SEO/>
            <ProjectContents/>
        </Layout>
    )
}

export default ConsultingPage