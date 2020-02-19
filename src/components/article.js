import React from "react";
import Img from "gatsby-image";

import JSONData from "../data/news.json"
import articleStyle from "../styles/article.module.scss";

const Article = (props) => {
    return(
        <div className={articleStyle.container}>
            <div className={articleStyle.imageContainer}>
                <Img fluid={props.image} className={articleStyle.image}/>
            </div>
            <div className={articleStyle.content}>
                <h2 className={articleStyle.heading}>{JSONData[props.id].title}</h2>
                <p className={articleStyle.text}>{JSONData[props.id].text}</p>
                <a href={JSONData[props.id].url} target="_blan" rel="noopener noreferrer" className={articleStyle.button}>
                    詳細
                </a>
            </div>
        </div>
    )
}

export default Article;