const path = require(`path`);

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  const placeList = path.resolve(`src/pages/placelist.js`);
  // Only update the `/app` page.
  if (page.path.match(/^\/(en|ja)\/placelist\/*/)) {
    const locale = page.path.match(/^\/(en|ja)\/*/);
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = `${locale[0]}placelist/*`;
    page.component = placeList;
    // Update the page.
    createPage(page);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/quarantinePost.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMarkdownRemark(limit: $limit) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `post-quarantine-urbanism/${edge.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          slug: `${edge.node.frontmatter.slug}`,
        },
      });
    });
  });
};
