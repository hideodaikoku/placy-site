import React from "react";
import Layout from "../components/layout";
import AppSection from "../components/app";
import PartnersSection from "../components/partners";
import News from "../components/news";
import Sponsors from "../components/sponsors";
import Video from "../components/video";
import Top from "../components/top";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Top />
      <AppSection />
      <Video />
      <PartnersSection />
      <News/>
      <Sponsors/>
    </Layout>
  );
};

export default IndexPage;
