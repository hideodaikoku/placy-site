import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Content from "../components/placelist/page";

const PlaceListPage = () => {
  return (
    <Layout color="placelist">
      <Head />
      <Content />
    </Layout>
  );
};

export default PlaceListPage;
