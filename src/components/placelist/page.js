import React from "react";
import Hero from "./hero";
import Listings from "./listings";
import Modal from "./modal";
import style from "../../styles/placelist.module.scss";

export const Page = () => {
  return (
    <div>
      <Hero />
      <Modal></Modal>
      <hr className={style.spacingBar} />
      <Listings />
    </div>
  );
};

export default Page;
