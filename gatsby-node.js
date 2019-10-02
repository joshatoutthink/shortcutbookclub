const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    //query for page data
    graphql(`
      {
        wordpress {
          months {
            nodes {
              slug
              id
            }
          }
          discussionGuide {
            nodes {
              id
              slug
              months {
                nodes {
                  slug
                }
              }
            }
          }
        }
      }
    `).then(results => {
      if (results.error) {
        reject(results.error)
      }
      const months = results.data.wordpress.months.nodes
      months.forEach(month => {
        createPage({
          path: `${month.slug}`,
          component: path.resolve(`./src/templates/month.js`),
          context: {
            slug: `${month.slug}`,
            id: `${month.id}`,
          },
        })
      })
      const discussionGuide = results.data.wordpress.discussionGuide.nodes
      discussionGuide.forEach(guide => {
        const { id, slug, months } = guide
        createPage({
          path: `${months.nodes[0].slug}/${slug}`,
          component: path.resolve(`./src/templates/discussionGuide.js`),
          context: {
            slug: `${slug}`,
            id: `${id}`,
          },
        })
      })
      resolve()
    })

    //create the page from dat
  })
}
