import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DiscussionArchiveGrid from "../components/DiscussionArchiveGrid"

import { fonts } from "../theme/fonts"

export const data = graphql`
  {
    wordpress {
      discussionGuide {
        nodes {
          id
          slug
          months {
            nodes {
              name
              slug
              posts {
                nodes {
                  BookInfo {
                    bookCover {
                      sourceUrl
                    }
                  }
                  title
                }
              }
            }
          }
          title
        }
      }
    }
  }
`

const DiscussionGuides = ({ data }) => {
  return (
    <>
      <SEO title="Discussion Guides" />
      <Layout>
        <div style={{ padding: "80px 20px 20px 20px" }}>
          <div className="title" style={{ textAlign: "center" }}>
            <h1>Our Discussion Guides</h1>
          </div>
        </div>
        <DiscussionArchiveGrid data={data} />
      </Layout>
    </>
  )
}

export default DiscussionGuides
