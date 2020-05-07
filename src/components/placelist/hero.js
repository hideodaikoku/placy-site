import React from "react";
import heroStyles from "../../styles/placelistHero.module.scss";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { openModal } from "./redux/actions";
import spinningRecord from "../../images/placelist.gif";

const Hero = ({ openModal }) => {
  const isSSR = typeof window === "undefined";
  if (isSSR) {
    return <div className={heroStyles.container}></div>;
  }

  return (
    <div className={heroStyles.container}>
      <h1 className={heroStyles.title}>Place List</h1>
      <img src={spinningRecord} className={heroStyles.image} />
      <div className={heroStyles.explanation}>
        <p>
          Placy プレイ(ス)リストへようこそ。
          <br />
          こちらは、思い入れのある場所のプレイリストを作成して
          <br />
          皆と共有するページです。
        </p>
        <p>
          外出自粛が続く中で、飲食店を始めとしたお店は
          <br />
          前売り券や寄付の呼びかけなど、
          <br />
          様々な取り組みを始めておられます。
          <br />
          音楽を通して、自分が大事に思う場所を伝えることで、
          <br />
          より多くの人にそのお店を知ってもらえる
          <br />
          きっかけになれば幸いです。
        </p>
        <p>
          プレイ(ス)リストは、店主様だけでなく、
          <br />
          そのお店を大切に思う皆様にも是非、作成して頂きたく
          <Link to="/placelist/0c2ab1b9-8d86-11ea-84a0-0e8729767258">*</Link>
          思っております。
          <br />
          そのお店での思い出や憧れを音楽にのせて伝えてみてください。
        </p>
        <p>それでは、作成してみましょう。</p>
      </div>
      <button
        className={heroStyles.toModal}
        onClick={() => openModal(window.scrollY)}
      >
        <span className={heroStyles.buttonText}>Create PlaceList</span>
      </button>
    </div>
  );
};

const mapDispatchToProps = { openModal };

export default connect(null, mapDispatchToProps)(Hero);
