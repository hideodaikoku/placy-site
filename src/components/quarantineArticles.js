import React from "react";
import { Link } from "gatsby";
import quarantineArticleStyles from "../styles/quarantinearticle.module.scss";
import quarantineData from "../data/quarantine.json";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const QuarantineArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      china: file(relativePath: { eq: "china.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zurich: file(relativePath: { eq: "zurich.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      athens: file(relativePath: { eq: "greece.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hkg: file(relativePath: { eq: "hkg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      london: file(relativePath: { eq: "london.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      russia: file(relativePath: { eq: "russia.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      australia: file(relativePath: { eq: "australia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tokyo: file(relativePath: { eq: "tokyo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chile: file(relativePath: { eq: "chile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rio: file(relativePath: { eq: "rio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      berlin: file(relativePath: { eq: "berlin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kyiv: file(relativePath: { eq: "kyiv.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      capeTown: file(relativePath: { eq: "cape-town.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      venice: file(relativePath: { eq: "venice.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore: file(relativePath: { eq: "singapore.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zagreb: file(relativePath: { eq: "croatia.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      luxembourg: file(relativePath: { eq: "lux.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wales: file(relativePath: { eq: "wales.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saopaolo: file(relativePath: { eq: "saop.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      valencia: file(relativePath: { eq: "valencia.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      madrid: file(relativePath: { eq: "madrid.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stockholm: file(relativePath: { eq: "stockholm.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cairo: file(relativePath: { eq: "cairo.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      london_participatory_design: file(relativePath: { eq: "london-participatory-design.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      berlin_neighbourhood: file(relativePath: { eq: "berlin-neighborhood.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hyderabad: file(relativePath: { eq: "hyderabad.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      italy: file(relativePath: { eq: "italy-movie.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      venice_rising: file(relativePath: { eq: "venice-rising.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sao_paolo_civic: file(relativePath: { eq: "sao-paolo-2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      berlin_night_time: file(relativePath: { eq: "berlin-night-time.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seoul: file(relativePath: { eq: "seoul.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amman: file(relativePath: { eq: "amman.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore_road_to_recovery: file(relativePath: { eq: "singapore_road.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ghana: file(relativePath: { eq: "ghana.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chaotic_india: file(relativePath: { eq: "chaotic_india.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      madrid_covid: file(relativePath: { eq: "madrid_covid.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      london_lockdown: file(relativePath: { eq: "london_lockdown.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore_landscapes: file(relativePath: { eq: "singapore_landscapes.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      india_public_places: file(relativePath: { eq: "india_public_places.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      copenhagen: file(relativePath: { eq: "copenhagen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brexit: file(relativePath: { eq: "brexit.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      melbourne_fair_space: file(relativePath: { eq: "melbourne_fair_space.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore_whats_next: file(relativePath: { eq: "singapore_whats_next.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      france: file(relativePath: { eq: "france.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mexico: file(relativePath: { eq: "mexico.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      montreal: file(relativePath: { eq: "montreal.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      indonesia: file(relativePath: { eq: "indonesia.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brussels: file(relativePath: { eq: "brussels.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      manilla: file(relativePath: { eq: "manilla.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ankara: file(relativePath: { eq: "ankara.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      london_social_distancing: file(relativePath: { eq: "london_social_distancing.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dubai: file(relativePath: { eq: "dubai.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      milan: file(relativePath: { eq: "milan.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mexico_city: file(relativePath: { eq: "mexico_city.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      london_home: file(relativePath: { eq: "london_home.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hanoi: file(relativePath: { eq: "hanoi.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dubai_dreamers: file(relativePath: { eq: "dubai_dreamers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prague: file(relativePath: { eq: "prague.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      excerpt: allMarkdownRemark {
        nodes {
          frontmatter {
            excerpt
            author
          }
        }
      }
    }
  `);

  return (
    <div className={quarantineArticleStyles.container}>
      <div className={quarantineArticleStyles.articleContainer}>
        {quarantineData
          .slice(0)
          .reverse()
          .map((quarantine, idx) => {
            if (idx === 0) {
              return (
                <div key={idx} className={quarantineArticleStyles.mainArticle}>
                  <div className={quarantineArticleStyles.imageContainer}>
                    <Link to={"/post-quarantine-urbanism/" + quarantine.slug}>
                      <Img
                        fluid={data[quarantine.img].childImageSharp.fluid}
                        className={quarantineArticleStyles.image}
                      />
                      <div className={quarantineArticleStyles.overlay}></div>
                    </Link>
                  </div>
                  <div className={quarantineArticleStyles.mainTextContainer}>
                    <h2>Latest Article</h2>
                    <h3 className={quarantineArticleStyles.country}>
                      {quarantine.title}
                    </h3>
                    <small>{quarantine.date}</small>
                    <p className={quarantineArticleStyles.author}>
                      <i>{quarantine.author}</i>
                    </p>
                    <p className={quarantineArticleStyles.title}>
                      {quarantine.place}
                    </p>
                    <p className={quarantineArticleStyles.excerpt}>
                      {
                        data.excerpt.nodes.filter(
                          (node) =>
                            node.frontmatter.author === quarantine.author
                        )[0].frontmatter.excerpt
                      }
                    </p>
                    <Link
                      to={"/post-quarantine-urbanism/" + quarantine.slug}
                      style={{ textDecoration: "underline" }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={idx} className={quarantineArticleStyles.article}>
                  <div className={quarantineArticleStyles.imageContainer}>
                    <Link to={"/post-quarantine-urbanism/" + quarantine.slug}>
                      <Img
                        fluid={data[quarantine.img].childImageSharp.fluid}
                        className={quarantineArticleStyles.image}
                      />
                      <div className={quarantineArticleStyles.overlay}></div>
                    </Link>
                  </div>
                  <h1 className={quarantineArticleStyles.country}>
                    {quarantine.place}
                  </h1>
                  <small>{quarantine.date}</small>
                  <p className={quarantineArticleStyles.author}>
                    <i>{quarantine.author}</i>
                  </p>
                  <p className={quarantineArticleStyles.title}>
                    {quarantine.title}
                  </p>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default QuarantineArticles;
