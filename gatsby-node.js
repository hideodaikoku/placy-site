const path = require(`path`);

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  const placeList = path.resolve(`src/pages/placelist.js`);
  // Only update the `/app` page.
  if (page.path.match(/^\/placelist\/*/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/placelist/*";
    page.component = placeList;
    // Update the page.
    createPage(page);
  }
};


const path = require('path');

module.exports.onCreateNode = ({ node, actions })=> {
    const { createNodeField } = actions;
    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath,'.md');
        
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/quarantineTemplate.js');
    const res = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter {
                          path
                        }
                    }
                }
            }
        }
    `)
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `${edge.node.frontmatter.path}`,
            context:{
                slug: edge.node.frontmatter.path
            }
        })
    });
}

