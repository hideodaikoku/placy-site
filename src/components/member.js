import React from "react";
import memberStyle from "../styles/member.module.scss";
import Img from "gatsby-image";

import JSONData from "../data/members.json";

const Member = (props) => {
  return (
    <div className={memberStyle.container}>
      <div className={memberStyle.imageContainer}>
        <Img fluid={props.image.fluid} />
      </div>
      <div className={memberStyle.textContainer}>
        <h3 className={memberStyle.title}>{JSONData[props.id].name}</h3>
        <h4 className={memberStyle.designation}>
          {JSONData[props.id].position}
        </h4>
        <p className={memberStyle.intro}>{JSONData[props.id].text}</p>
      </div>
    </div>
  );
};

export default Member;
