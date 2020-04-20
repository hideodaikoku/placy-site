import React from "react";
import Layout from "../components/layout";
import Head from "../components/head"
import QuarantineTop from "../components/quarantineTop";
import QuarantineArticles from "../components/quarantineArticles";
import ArticleModal from "../components/articleModal";

const Quarantine = () =>  {
    return(
        <Layout color="white">
            <Head/>
            <QuarantineTop/>
            <QuarantineArticles/>
            <ArticleModal/>
        </Layout>
    );
}

export default Quarantine;