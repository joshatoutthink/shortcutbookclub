import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import ThemeButton from "../components/styled-elements/ThemeButton"
import { contentMaxWidth } from "../theme/widths"
import { primaryColor } from "../theme/colors"
import { screen, screenAbove } from "../theme/mediaQueries"
import { fonts } from "../theme/fonts"

export const data = graphql`
  query month_QUERY($id: ID!) {
    wordpress {
      month(id: $id) {
        name
        slug
        discussionGuide {
          nodes {
            slug
          }
        }
        posts(first: 1) {
          nodes {
            BookInfo {
              bookAuthor
              bookCover {
                sourceUrl(size: LARGE)
              }
              bookLinks {
                linkUrl
                linkText
              }
            }
            content(format: RENDERED)
            title(format: RENDERED)
          }
        }
      }
    }
  }
`

const Month = ({ data }) => {
  const { name, posts, discussionGuide, slug } = data.wordpress.month
  const { BookInfo, content, title } = posts.nodes[0]
  const { bookAuthor, bookCover, bookLinks } = BookInfo
  return (
    <>
      <Seo title={"month"} />

      <Layout>
        <MonthLayout>
          <div className="page-name">
            <h1>{name}</h1>
          </div>
          <section className="book">
            <div className="book-info">
              <div className="book-title">
                <h2>{title}</h2>
                <p className="by-line">by: {bookAuthor}</p>
              </div>
            </div>
            <div className="book-img">
              <img src={bookCover.sourceUrl} alt={title} />
            </div>
            <div className="find-book">
              <h3>Find this book</h3>
              <ul className="btn-group">
                {bookLinks.map((bookLink, index) => (
                  <li key={index}>
                    <ThemeButton as="a" href={bookLink.linkUrl}>
                      {bookLink.linkText}
                    </ThemeButton>
                  </li>
                ))}
              </ul>
            </div>
            <div className="discussion-guide">
              <h3>Get the discussion guide</h3>
              <ThemeButton to={`${slug}/${discussionGuide.nodes[0].slug}`}>
                discussion guide
              </ThemeButton>
            </div>
          </section>
          <section>
            <h3>Book Summary</h3>
            <div
              className="book-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </section>
        </MonthLayout>
      </Layout>
    </>
  )
}

export default Month

const MonthLayout = styled.div`
  padding: 20px;
  ${screenAbove(
    screen.mobile,
    `
  padding-top:80px;
  `
  )}
  max-width: ${contentMaxWidth};
  margin: 0 auto;
  ${fonts("copy")}
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  h1 {
    ${fonts("heading")}
    font-size: 24px;
    color: ${primaryColor};
  }
  
  h3 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .book {
    margin-bottom: 40px;
    .book-img {
      img {
        width: 100%;
      }
    }
    .discussion-guide {
      margin-bottom: 20px;
      a {
        margin-right: 0px;
        display:inline-block;
        
      }
    }
    h2 {
      font-size: 36px;
      margin-bottom: 10px;
    }
    .by-line {
      font-size: 24px;
      font-weight: 400;
    }
    .find-book {
      .btn-group {
        display: flex;
        flex-wrap:wrap;
        a{
          margin-right:20px;
          margin-bottom:10px;
        }
      }
      margin-bottom: 20px;
    }
    /* DESKTOP */
    ${screenAbove(
      screen.medium,
      `
      display:grid;
      grid-template-rows: 100px auto auto;
      grid-template-columns:200px 1fr;
      grid-column-gap:40px
      .book-info{
        grid-column:2/-1;
        grid-row:1/2   
        h4{
          font-size:32px
        }
      }
      .find-book{
        grid-column:2/3;
        grid-row:2/3;
      }
      .book-img{
        grid-column:1/2;
        grid-row:1/4;
        max-height:300px;
        overflow:hidden;
        img{
          object-fit:cover;
          object-position:center top;
        }
      }
      
      .discussion-guide{
        grid-column:2/3;
      }
    `
    )}
  }
`
