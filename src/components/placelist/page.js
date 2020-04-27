import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Hero from "./hero";
import Listings from "./listings";
import Modal from "./createListingModal";
import style from "../../styles/placelist.module.scss";

export const Page = () => {
  return (
    <Provider store={store}>
      <Modal></Modal>
      <Hero />
      <hr className={style.spacingBar} />
      <Listings></Listings>
    </Provider>
  );
};

export default Page;
