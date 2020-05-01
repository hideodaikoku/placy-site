import React from "react";
import Layout from "../components/layout";
import QuarantineTop from "../components/quarantineTop";
import QuarantineArticles from "../components/quarantineArticles";
import SEO from "../components/seo";

const Quarantine = () =>  {
    return(
        <Layout color="white">
            <SEO/>
            <QuarantineTop/>
            <QuarantineArticles/>
        </Layout>
    );
}

export default Quarantine;