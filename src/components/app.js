import React from "react";
import appStyles from "../styles/app.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";

const AppSection  = () => {
    
    const data = useStaticQuery(graphql`
    query{
        apple: file(relativePath: {eq: "btn_apple.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        android: file(relativePath: {eq: "btn_googleplay.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        app: file(relativePath: {eq: "iphone.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

    const intl = useIntl();

    return(
        <div className={appStyles.introContainer}>
            <div className={appStyles.textContent}>
                <h1 className={appStyles.title}>
                    Forget the reviews. <br/>
                    Follow your rhythm.
                </h1>
                <p className={appStyles.desc}>
                    {intl
                    .formatMessage({ id: "home_top" })
                    .split("\n")
                    .map((c) => (
                        <span key={c}>
                        {c}
                        <br />
                        </span>
                    ))}
                </p>
                <div className={appStyles.buttoncontainer}>
                    <div className={appStyles.button}>
                        <a 
                            href='https://apps.apple.com/jp/app/placy/id1474567327'
                            target="_blank"
                            rel="noopener noreferrer"
                            alt="App Store"
                        >
                        <Img fluid={data.apple.childImageSharp.fluid} />
                        </a>
                    </div>
                    <div className={appStyles.button} id={appStyles.android}>
                        <a 
                            href='https://play.google.com/store/apps/details?id=com.placy.placyapp'
                            target="_blank"
                            rel="noopener noreferrer"
                            alt="Play Store"
                        >
                        <Img fluid={data.android.childImageSharp.fluid}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={appStyles.right}>
                <div className={appStyles.imgContainer}>
                    <Img fluid={data.app.childImageSharp.fluid}/>
                </div>
            </div>
        </div>
    )
}

export default AppSection;