import React from "react";
import heroStyles from "../../styles/placelistHero.module.scss";
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
      {/* <img
        src={spinningRecord}
        className={heroStyles.image}
        alt="Placelist spinning record logo"
      /> */}
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
        </p>
        <p>
          自分の好きなお店を紹介する方法として、
          <br />
          その場所の空気や雰囲気を伝えるプレイ(ス)リストを、
          <br />
          作ってみるのはいかがでしょうか。
          <br />
          お店での思い出や憧れを音楽にのせて届けてみよう。
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
