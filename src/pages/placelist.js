import React from "react";
import { Router } from "@reach/router";

import { Provider } from "react-redux";
import store from "../components/placelist/redux/store";
import Layout from "../components/layout";
import Head from "../components/head";
import Content from "../components/placelist/page";
import ListingPage from "../components/placelist/listingPage";

const PlaceListPage = () => {
  return (
    <Layout color="placelist">
      <Head />
      <Provider store={store}>
        <Router basepath="/placelist">
          <Content path="/" />
          <ListingPage path="/:listingId" />
        </Router>
      </Provider>
    </Layout>
  );
};

export default PlaceListPage;
