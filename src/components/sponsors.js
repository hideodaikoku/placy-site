import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import sponsorStyle from "../styles/sponsors.module.scss";

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query {
      sponsor: file(relativePath: { eq: "sponsors.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={sponsorStyle.container}>
        <div className={sponsorStyle.imageContainer}>

        <h3 className={sponsorStyle.title}>Partners and Media Coverage</h3>
        <Img className={sponsorStyle.image} fluid={data.sponsor.childImageSharp.fluid}/>
        </div>
    </div>
  );
};

export default Sponsors;
