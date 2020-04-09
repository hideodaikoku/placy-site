import React from "react"
import Layout from "../components/layout";
import AppSection from "../components/app";
import PartnersSection from "../components/partners";
import Head from "../components/head";
import Top from "../components/top";

const IndexPage = () => {
    return(
        <Layout>
            <Head/>
            <Top/>
            <AppSection/>
            <PartnersSection/>
        </Layout>
    )
}

export default IndexPage