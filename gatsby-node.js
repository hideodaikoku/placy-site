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
