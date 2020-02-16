import React from "react";
import appStyles from "../styles/app.module.scss";


const AppSection  = () => {


    return(
        <div className={appStyles.appContainer}>
            <h2 className={appStyles.heading}>音楽で場所を探せる地図アプリ</h2>
        </div>
    )
}

export default AppSection;