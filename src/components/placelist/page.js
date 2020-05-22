import React from "react";
import Hero from "./hero";
import Listings from "./listings";
import Modal from "./modal";
import style from "../../styles/placelist.module.scss";
import SEO from "../seo";
import Prefetch from "../prefetch";

export const Page = () => {
  return (
    <div>
      <SEO
        title="Placelist"
        description="Placy プレイ(ス)リストへようこそ。こちらは、思い入れのある場所のプレイリストを作成して皆と共有するページです。"
        image="/images/placelist.jpg"
      />
      <Prefetch
        rel="preconnect"
        href="https://open.scdn.co/"
        probability={1.0}
      />
      <Prefetch
        rel="preconnect"
        href="https://www.googletagmanager.com"
        probability={0.8}
      />
      <Hero />
      <Modal></Modal>
      <hr className={style.spacingBar} />
      <Listings />
    </div>
  );
};

export default Page;
