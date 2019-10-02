import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BooksArchiveGrid from "../components/BooksArchiveGrid"

import { fonts } from "../theme/fonts"

export const data = graphql`
  {
    wordpress {
      months {
        nodes {
          name
          slug
          posts {
            nodes {
              title
              slug
              BookInfo {
                bookCover {
                  sourceUrl(size: LARGE)
                }
              }
            }
          }
        }
      }
    }
  }
`

const BookArchive = ({ data }) => {
  return (
    <>
      <SEO title="Books" />
      <Layout>
        <div style={{ padding: "80px 20px 20px 20px" }}>
          <div className="title" style={{ textAlign: "center" }}>
            <h1>Recent Books</h1>
          </div>
        </div>
        <BooksArchiveGrid data={data} />
      </Layout>
    </>
  )
}

export default BookArchive
