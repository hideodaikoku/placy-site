import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Hero from "../components/placelist/hero";
import Listings from "../components/placelist/listings";
import style from "../styles/placelist.module.scss";

const PlaceListPage = () => {
  return (
    <Layout color="placelist">
      <Head />
      <Hero />
      <hr className={style.spacingBar} />
      <Listings></Listings>
    </Layout>
  );
};

export default PlaceListPage;
