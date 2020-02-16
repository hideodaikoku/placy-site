module.exports = {
  siteMetadata: {
    title: "Placy | Find Your Rhythm",
    author: "Hideo Daikoku"
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-plugin-sharp"
  ]
}
