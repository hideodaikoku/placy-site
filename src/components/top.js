import React from "react";
import topStyles from "../styles/top.module.scss";
const AOS = require("aos")
AOS.init();

const Top  = () => {
    return(
        <div className={topStyles.container}>
            <div className={topStyles.topContainer}>
                <h1 className={topStyles.titleText}>
                    We are Placy, <br/>
                    a company creating alternative <br/>
                    place search engine.
                </h1>
                <p className={topStyles.titlePara}>
                    Download our map app where you can <br/>
                    find places based on your music preferences.
                </p>
            </div>
            <div className={topStyles.right}>
                {" "}
            </div>
        </div>
    )
}

export default Top;