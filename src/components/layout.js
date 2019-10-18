import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withAssetPrefix, Link } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import MainMenu from "./MainMenu"
import Logo from "./Logo"
import "./layout.css"

import { black, sephia } from "../theme/colors"
import { fonts } from "../theme/fonts"
import { marginBottom } from "../theme/spaceing"
import { screenBelow, screen } from "../theme/mediaQueries"

const mobileMenuContext = React.createContext({
  menuOpen: false,
})
const userMenuContext = React.createContext({
  userMenu: false,
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuOpenState, setMenuOpenState] = useState(false)
  const [userMenuOpenState, setUserMenuOpenState] = useState(false)
  return (
    <mobileMenuContext.Provider
      value={{
        menuOpenState,
        setMenuOpenState,
      }}
    >
      <userMenuContext.Provider
        value={{
          userMenuOpenState,
          setUserMenuOpenState,
        }}
      >
        <Container>
          {/* sidebar hides at mobile and hamburger is shown */}
          <div className="sidebar">
            <div className="name-plate">
              <div className="logo">
                <Logo />
              </div>
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1>Short Cut Book Club</h1>
              </Link>
            </div>
            <MainMenu layout="sidebar" />
          </div>

          <div className="main-content">
            <Header siteTitle={data.site.siteMetadata.title} />
            <PageLayout>
              <main>{children}</main>
            </PageLayout>
          </div>
        </Container>
      </userMenuContext.Provider>
    </mobileMenuContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const PageLayout = styled.div`
  width: 100%;
`
const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 100%;
  width: 100%;
  @media (max-width: 763px) {
    grid-template-columns: 100%;
  }
  .sidebar {
    padding: ${marginBottom} 0;
    grid-column: 1/2;
    grid-row: 1/2;
    background: ${black};
    background: ${"#221E1F"};
    .name-plate {
      margin-bottom: ${marginBottom};
      .logo {
        max-width: 75px;
        margin: 0 auto;
        img {
          margin-bottom: 5px;
        }
      }
      h1 {
        ${fonts("heading")}
        color:white;
        text-align: center;
        font-size: 24px;
      }
    }
    @media (max-width: 763px) {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-100%);
    }
    @media print {
      display: none;
    }
  }

  .main-content {
    width: 100%;
    grid-column: 2/-1;
    grid-row: 1/2;
    @media (max-width: 763px) {
      grid-column: 1/-1;
    }
    @media print {
      grid-column: 1/-1;
    }
  }
`
export { mobileMenuContext, userMenuContext }
