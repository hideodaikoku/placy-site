import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import quarantineTopStyles from "../styles/quarantineTopStyles.module.scss";
import Img from "gatsby-image";

const QuarantineTop = () => {
  const data = useStaticQuery(graphql`
    query {
      pqr: file(relativePath: { eq: "Placy_PQR.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      atu: file(relativePath: { eq: "atu.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      spread: file(relativePath: { eq: "spread.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={quarantineTopStyles.container}>
      <div className={quarantineTopStyles.imgContainer}>
        <Img
          fluid={data.pqr.childImageSharp.fluid}
          className={quarantineTopStyles.pqr}
          alt="quarantine image"
        />
      </div>
      <p className={quarantineTopStyles.textContainer}>
        Cities are the central nodes of our modern economy; hubs of creativity
        and innovation. Our globalised system relies on us living collectively,
        but pandemics are inherently anti-city, as they could force the
        breakdown of collective cooperation. How will our cities evolve, to
        adapt to this new reality?
        <br />
        <br />
        Cities across the world are establishing unique initiatives and projects
        to combat the effects of this situation; and by exploring each city's
        approach, perhaps we can gain a glimpse of our post quarantine world.
      </p>
      <p className={quarantineTopStyles.textContainer}>
        Our aim is to collate around 50 articles from contributors around the
        world, to capture their thoughts and state of mind during the covid19
        pandemic, covering urban quarantine culture, its side effects and
        philosophical ramifications, while touching on the situation in each
        country. This way we can form a holistic snapshot of the mind-state of
        residents in various cities across the world.
      </p>
      <div className={quarantineTopStyles.buttonContainer}>
        <a
          href="https://www.allthingsurban.net/career/613"
          target="_blank"
          rel="noopener noreferrer"
          className={quarantineTopStyles.button}
        >
          APPLY TO BE RESEARCH WRITER
        </a>
      </div>
      <div className={quarantineTopStyles.diagram}>
        <div className={quarantineTopStyles.box}>
          <strong>1st Stage: Collated articles from each country</strong> <br />{" "}
          Description of how things are now
        </div>
        <div className={quarantineTopStyles.arrow}>&#8595;</div>
        <div className={quarantineTopStyles.box}>
          <strong>2nd Stage: Online Conference</strong> <br /> Aspirations for
          how things should be
        </div>
        <div className={quarantineTopStyles.arrow}>&#8595;</div>
        <div className={quarantineTopStyles.box}>
          <strong>
            3rd Stage: Proposing an actionable plan to municipal governments
          </strong>
        </div>
      <div className={quarantineTopStyles.mediaContainer}>
        <h1>Media Partners</h1>
        <div className={quarantineTopStyles.mediaImgContainer}>
          <div className={quarantineTopStyles.mediaImg}>
            <Img fluid={data.atu.childImageSharp.fluid}/>
          </div>
          <div className={quarantineTopStyles.mediaImg}>
            <Img fluid={data.spread.childImageSharp.fluid}/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuarantineTop;
