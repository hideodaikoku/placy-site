import React from "react";
import Layout from "../components/layout";

import AboutContent from "../components/about-content.js";
import SEO from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <SEO />
      <AboutContent />
    </Layout>
  );
};

export default AboutPage;
