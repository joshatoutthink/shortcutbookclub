import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Logo from "../components/Logo"
import SEO from "../components/seo"
import { fonts } from "../theme/fonts"
import { black, primaryColor, sephia } from "../theme/colors"
import { marginBottom } from "../theme/spaceing"
import ThemeButton from "../components/styled-elements/ThemeButton"
import { screen, screenBelow, screenAbove } from "../theme/mediaQueries"

export const data = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
      }
    }
    wordpress {
      pages(where: { title: "short cut book club" }) {
        nodes {
          content(format: RENDERED)
          SiteData {
            heroImage {
              sourceUrl(size: LARGE)
            }
          }
        }
      }
      posts(first: 1) {
        nodes {
          BookInfo {
            bookExcerpt
            bookAuthor
            bookCover {
              sourceUrl(size: LARGE)
            }
            bookLinks {
              linkText
              linkUrl
            }
          }
          id
          months {
            nodes {
              name
              slug
            }
          }
          slug
          title(format: RENDERED)
          excerpt(format: RENDERED)
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { siteTitle, siteDescription } = data.site.siteMetadata

  const { posts } = data.wordpress

  return (
    <Layout>
      <SEO title="Home" />
      <HeroBlock>
        <div className="hero-image">
          <img
            src={data.wordpress.pages.nodes[0].SiteData.heroImage.sourceUrl}
            alt="sky"
          />
        </div>
        <div className="hero__site-info">
          <div className="logo">
            <Logo />
          </div>
          <div className="site-name">
            <h1>{siteTitle}</h1>
          </div>
          <div
            className="site-description"
            dangerouslySetInnerHTML={{
              __html: data.wordpress.pages.nodes[0].content,
            }}
          />
          <ThemeButton
            as="a"
            href="https://www.instagram.com/shortcutbookclub"
            style={{ padding: "15px" }}
          >
            Join Our Book Club
          </ThemeButton>
        </div>
      </HeroBlock>
      <UpdateBlock primaryColor="#84322F">
        <div className="home__posts">
          <h2>We are currently Reading</h2>
          {posts.nodes.map(post => {
            const {
              bookCover,
              bookAuthor,
              bookLinks,
              bookExcerpt,
            } = post.BookInfo
            console.log(bookExcerpt)
            const { slug } = post.months.nodes[0]
            return (
              <li key={post.id} className="currently-reading__post">
                <div className="book-info">
                  <h3>
                    <Link to={slug}>{post.months.nodes[0].name}</Link>
                  </h3>
                  <h4>
                    <Link to={slug}>
                      {post.title}
                      <div className="by-line"> by: {bookAuthor}</div>
                    </Link>
                  </h4>
                </div>
                <Link
                  className="book-img"
                  to={slug}
                  style={{ display: "block" }}
                >
                  <img src={bookCover.sourceUrl} alt={post.title} />
                </Link>
                <div className="find-book">
                  <h3>Find this book</h3>
                  <ul className="btn-group">
                    {bookLinks.map((bookLink, index) => (
                      <li key={index}>
                        <ThemeButton
                          as="a"
                          className="buy-link"
                          href={bookLink.linkUrl}
                        >
                          {bookLink.linkText}
                        </ThemeButton>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="book-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: bookExcerpt,
                    }}
                  />
                  {
                    <Link to={slug} style={{ color: "#BD5719" }}>
                      Read More &rarr;
                    </Link>
                  }
                </div>
              </li>
            )
          })}
        </div>
      </UpdateBlock>
    </Layout>
  )
}

export default IndexPage

const HeroBlock = styled.section`
  display: grid;
  grid-template-rows: 30vh 15vh auto;
  background: white;
  text-align: center;
  padding: 50px 0;
  padding-top: 0;
  ${fonts("copy")}

  .hero-image {
    grid-row: 1/3;
    grid-column: 1/-1;
    height: 100%;
    img {
      object-fit: cover;
      object-position: 50% 50%;
      height: 100%;
      width: 100%;
    }
  }
  .hero__site-info {
    max-width: 763px;
    margin: 0 auto;
    padding: 0 20px;
    grid-row: 2/4;
    grid-column: 1/-1;
    .site-name {
      ${fonts("heading")}
      font-size: 24px;
    }
    .logo {
      width: 200px;
      margin: 0 auto;
      border: 4px solid white;
      border-radius: 50%;
      height: 200px;
    }
    .hero__cta {
      ${fonts("heading")}
      padding: 10px 20px;
      width: 100%;
      display: block;
      margin: 0 auto;
      background-color: ${primaryColor};
      border-radius: 4px;
      color: white;
    }
  }
`

export const UpdateBlock = styled.section`
  ${fonts("copy")}
  a {
    text-decoration: none;
    color: ${black};
  }
  background: ${sephia};
  padding: 50px 20px;
  h2 {
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 30px;
  }
  .home__posts {
    max-width: 590px;
    margin: 0 auto;
    padding: 0px 20px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .but-link {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .currently-reading__post {
    ${screenAbove(
      screen.medium,
      `
      display:grid;
      grid-template-rows: 100px 1fr;
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
        grid-column:1/3;
        grid-row:4/5;
      }
      .book-img{
        grid-column:1/2;
        grid-row:1/4;
        overflow:hidden;
        max-height:300px;
        img{
          object-fit:cover;
          object-position:center top;
        }
      }
      .book-content{
        grid-column:2/3
        grid-row:2/4
      }
    `
    )}
    li {
      /* this is for the find links */
      list-style: none;
      padding: 0px;
      margin-bottom: 0px;
    }
    h3 {
      font-size: 14px;
      a {
        color: ${primaryColor};
      }
      margin-bottom: 6px;
    }
    h4 {
      font-size: 24px;
      .by-line {
        font-weight: 400;
        font-size: 75%;
      }
      margin-bottom: 35px;
    }
    img {
      width: 100%;
    }
    .book-img {
      display: block;
      margin-bottom: 35px;
      * {
        display: block;
      }
    }
    .btn-group {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      ${fonts("heading")}
      .buy-link {
        display: block;
        text-decoration: none;
        color: white;
        background: ${primaryColor};
        margin-right: 20px;
        margin-bottom: 10px;
        padding: 10px 15px;
        border-radius: 4px;
      }
      margin-bottom: ${marginBottom};
    }
  }
`
export { HeroBlock }
