import React from "react"
import Layout from "../components/layout"

import projectStyles from "../styles/projects.module.scss";
import ProjectContents from "../components/projectContents";

import Head from "../components/head";

const ConsultingPage = () => {
    return(
        <Layout>
            <Head/>
            <ProjectContents/>
        </Layout>
    )
}

export default ConsultingPage