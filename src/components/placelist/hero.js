import React from "react";
import heroStyles from "../../styles/placelistHero.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { connect } from "react-redux";
import { openModal } from "./redux/actions";

const Hero = ({ openModal }) => {
  const data = useStaticQuery(graphql`
    query {
      illust: file(relativePath: { eq: "4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={heroStyles.container}>
      <h1 className={heroStyles.title}>Place List</h1>
      <Img
        fluid={data.illust.childImageSharp.fluid}
        className={heroStyles.image}
      />
      <div className={heroStyles.explanation}>
        <p>
          Placy プレイ(ス)リストへようこそ。
          <br />
          こちらは、思い入れのある場所のプレイリストを作成して皆と共有するページです。
        </p>
        <p>
          外出自粛が続く中で、飲食店を始めとしたお店は
          <br />
          前売り券や寄付の呼びかけなど、
          <br />
          様々な取り組みを始めておられます。
          <br />
          音楽を通して、自分が大事に思う場所を
          <br />
          伝えることで、より多くの人にそのお店を
          <br />
          知ってもらえるきっかけになれば幸いです。
        </p>
        <p>それでは、作成してみましょう。</p>
      </div>
      <button className={heroStyles.toModal} onClick={openModal}>
        <span className={heroStyles.buttonText}>Create PlaceList</span>
      </button>
    </div>
  );
};

const mapDispatchToProps = { openModal };

export default connect(null, mapDispatchToProps)(Hero);
