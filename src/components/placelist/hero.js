import React from "react";
import heroStyles from "../../styles/placelistHero.module.scss";
import { connect } from "react-redux";
import { openModal } from "./redux/actions";
import spinningRecord from "../../images/placelist.gif";
import {useIntl} from "gatsby-plugin-intl"
const Hero = ({ openModal }) => {
  const intl = useIntl()
  const isSSR = typeof window === "undefined";
  if (isSSR) {
    return <div className={heroStyles.container}></div>;
  }
  
  return (
    <div className={heroStyles.container}>
      <h1 className={heroStyles.title}>Place List</h1>
      <img
        src={spinningRecord}
        className={heroStyles.image}
        alt="Placelist spinning record logo"
      />
      <div className={heroStyles.explanation}>
        <p>
          {
              intl
                  .formatMessage({id:"projects_placelist"})
                  .split('\n')
                  .map(c=>
                      <>
                          {c}<br/>
                      </>
                  )    
          }
        </p>
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
