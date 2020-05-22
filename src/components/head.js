import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  return (
    <Helmet
      title={data.site.siteMetadata.title}
      author={data.site.siteMetadata.author}
    />
  );
};

export default Head;
