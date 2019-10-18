import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/Logo"
import SEO from "../components/seo"
import { fonts } from "../theme/fonts"
import { black, primaryColor, sephia } from "../theme/colors"
import { marginBottom } from "../theme/spaceing"
import ThemeButton from "../components/styled-elements/ThemeButton"
import { screen, screenBelow, screenAbove } from "../theme/mediaQueries"
import { HeroBlock } from "./index"
import { contentMaxWidth } from "../theme/widths"

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
          SiteData {
            heroImage {
              sourceUrl(size: LARGE)
            }
          }
        }
      }
      aboutPage: pages(where: { title: "about" }) {
        nodes {
          content(format: RENDERED)
        }
      }
    }
  }
`

const About = ({ data }) => {
  const { siteTitle } = data.site.siteMetadata
  const { content } = data.wordpress.aboutPage.nodes[0]
  return (
    <Layout>
      <SEO title="Home" />
      <AboutHeroBlock>
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
            <h1 style={{ lineHeight: "1.3em" }}>
              About
              <br />
              {siteTitle}
            </h1>
          </div>
        </div>
      </AboutHeroBlock>
      <PageContent>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageContent>
    </Layout>
  )
}

export default About

const AboutHeroBlock = styled(HeroBlock)`
  grid-template-rows: 20vh 10 vh auto;
`

const PageContent = styled.div`
  max-width: ${contentMaxWidth};
  margin: 0 auto;
  ${screenBelow(
    screen.mobile,
    `
    padding:0 20px;
  `
  )}
`
