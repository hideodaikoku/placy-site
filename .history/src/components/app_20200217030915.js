import React from "react";
import appStyles from "../styles/app.module.scss";

import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const AppSection  = () => {
    return(
        <div className={appStyles.appContainer}>
            <h2 className={appStyles.heading}>音楽で場所を探せる地図アプリ</h2>
        </div>
    )
}

export default AppSection;