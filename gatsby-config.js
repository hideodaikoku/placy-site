module.exports = {
  siteMetadata: {
    title: "Placy",
    titleTemplate: "%s | Find Your Rhythm",
    description:
      "We are Placy, a company creating alternative place search engine.",
    url: "https://placy.city", // No trailing slash allowed!
    image: "/images/placy.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@placy_city",
    author: "Hideo Daikoku",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-133311679-1",
      },
    },
  ],
};
