import React from "react"
import memberStyle from "../styles/member.module.scss";
import Img from "gatsby-image";
import {useIntl} from "gatsby-plugin-intl";

const Member = (props) => {
    const intl = useIntl();

    return(
        <div className={memberStyle.container}>
            <Img fluid={props.image.fluid} className={memberStyle.imageContainer}/>
            <div className={memberStyle.textContainer}>
                <h3 className={memberStyle.title}>{intl.formatMessage({id:`members.${props.id}.name`})}</h3>
                <h4 className={memberStyle.designation}>{intl.formatMessage({id:`members.${props.id}.position`})}</h4>
                <p className={memberStyle.intro}>{intl.formatMessage({id:`members.${props.id}.text`})}</p>
            </div>
        </div>
    )
}

export default Member;