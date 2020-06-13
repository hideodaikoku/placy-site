import React from "react"
import missionStyle from "../styles/mission.module.scss"; 
import { useIntl } from "gatsby-plugin-intl";

const MissionSection = () => {

    const intl = useIntl();
    return(
        <div className={missionStyle.container}>
            <p className={missionStyle.text}>
            {intl
              .formatMessage({ id: "about_mission" })
              .split("\n")
              .map((c, idx) => (
                <span key={idx}>
                  {c}
                  <br />
                </span>
            ))}
            </p>
        </div>
    )
}

export default MissionSection;