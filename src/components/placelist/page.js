import React from "react";
import Hero from "./hero";
import Listings from "./listings";
import Modal from "./modal";
import style from "../../styles/placelist.module.scss";
import SEO from "../seo";
import { useStaticQuery, graphql } from "gatsby";

export const Page = () => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          placelistImage
        }
      }
    }
  `);
  const spinningRecord = site.siteMetadata.placelistImage;

  return (
    <div>
      <SEO
        title="Placelist"
        description="Placy プレイ(ス)リストへようこそ。こちらは、思い入れのある場所のプレイリストを作成して皆と共有するページです。"
        image={spinningRecord}
      />
      <Hero />
      <Modal></Modal>
      <hr className={style.spacingBar} />
      <Listings />
    </div>
  );
};

export default Page;
