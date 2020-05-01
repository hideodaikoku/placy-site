import React from "react";
import Layout from "../components/layout";
import Head from "../components/head"
import QuarantineTop from "../components/quarantineTop";
import QuarantineArticles from "../components/quarantineArticles";
import SEO from "../components/seo";

const Quarantine = () =>  {
    return(
        <Layout color="white">
            <Head/>
            <SEO/>
            <QuarantineTop/>
            <QuarantineArticles/>
        </Layout>
    );
}

export default Quarantine;