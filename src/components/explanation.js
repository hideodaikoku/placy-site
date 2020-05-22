import React from "react"
import explanationStyle from "../styles/explanation.module.scss"; 
import { useIntl } from "gatsby-plugin-intl";

const Explanation = () => {

    const intl = useIntl();
    return(
        <div className={explanationStyle.container}>
            <p className={explanationStyle.text}>
            {intl
              .formatMessage({ id: "about_explanation" })
              .split("\n")
              .map((c) => (
                <>
                  {c}
                  <br />
                </>
            ))}
            </p>
        </div>
    )
}

export default Explanation;

