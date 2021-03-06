import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import {useIntl} from "gatsby-plugin-intl";
import partnerStyle from "../styles/partners.module.scss";

const PartnersSection = () => {
  const data = useStaticQuery(graphql`
    query {
      microsoft: file(relativePath: { eq: "microsoft.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wired: file(relativePath: { eq: "wired.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yamanote: file(relativePath: { eq: "jr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jr : file(relativePath:{ eq: "jr.png"}){
        childImageSharp{
          fluid(maxWidth: 1024){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const intl = useIntl();
  return (
    <div className={partnerStyle.container}>
      <div className={partnerStyle.microsoft}>
        <div className={partnerStyle.leftContent}>
          <h1 className={partnerStyle.title}>
          {intl
              .formatMessage({ id: "home_microsoft" })
              .split("\n")
              .map((c) => (
                <div key={c}>
                  {c}
                  <br />
                </div >
            ))}
          </h1>
          <a
            href="https://prtimes.jp/main/html/rd/p/000000003.000047935.html"
            className={partnerStyle.link}
          >
            Read more
          </a>
          <div className={partnerStyle.image}>
            <Img fluid={data.microsoft.childImageSharp.fluid} />
          </div>
        </div>
        <div className={partnerStyle.right}></div>
      </div>

      <div className={partnerStyle.wired}>
        <div className={partnerStyle.left}></div>
        <div className={partnerStyle.rightContent}>
          <h1 className={partnerStyle.title}>
          {intl
              .formatMessage({ id: "home_wired" })
              .split("\n")
              .map((c) => (
                <div key={c}>
                  {c}
                  <br />
                </div>
            ))}
          </h1>
          <a
            href="https://wired.jp/2020/01/03/placy/"
            className={partnerStyle.link}
          >
            Read more
          </a>
          <div className={partnerStyle.wiredImage}>
            <Img fluid={data.wired.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div className={partnerStyle.yamanote}>
        <div className={partnerStyle.leftContent}>
          <h1 className={partnerStyle.title}>
            Explore Yamanote-Line
            <br />
            through music.
          </h1>
          <p className={partnerStyle.desc}>
          {intl
              .formatMessage({ id: "home_urban_rhythm" })
              .split("\n")
              .map((c, idx) => (
                <span key={idx}>
                  {c}
                  <br />
                </span>
            ))}
          </p>
          <a
            href="https://prtimes.jp/main/html/rd/p/000000005.000047935.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
          <div className={partnerStyle.yamanoteBottom}>
            <div className={partnerStyle.imageContainer}>
              <Img className={partnerStyle.jrImage} fluid={data.yamanote.childImageSharp.fluid} />
              <Img className={partnerStyle.jrLogo} fluid={data.jr.childImageSharp.fluid}/>
            </div>
          </div>
        </div>
        <div className={partnerStyle.right}></div>
      </div>
    </div>
  );
};

export default PartnersSection;
