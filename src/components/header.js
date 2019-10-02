import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import MainMenu from "./MainMenu"
import UserSettings from "./UserSettings"
import { mobileMenuContext, userMenuContext } from "./layout"
import UserSettingsMenuToggle from "./UserSettingsMenuToggle"

import { screenBelow, screen, screenAbove } from "../theme/mediaQueries"
import Hamburger from "./Hamburger"

const Header = ({ siteTitle }) => {
  const menuState = useContext(mobileMenuContext)
  const { menuOpenState } = menuState

  const userMenuState = useContext(userMenuContext)
  const { userMenuOpenState } = userMenuState
  console.log(userMenuOpenState)
  return (
    <HeaderStyled>
      {/* sidebar hides at mobile and hamburger is shown */}
      <MobileMenu>
        <Hamburger />
        {menuOpenState && <MainMenu layout="mobile" />}
      </MobileMenu>
      <div>
        <h1 className="site-title" style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      {/* <div>
        <UserSettingsMenuToggle />
        {userMenuOpenState && <UserSettings />}
      </div> */}
    </HeaderStyled>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderStyled = styled.header`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  ${screenAbove(
    screen.mobile,
    `
    width:100%;
    z-index:1000000;
    position:absolute;
  `
  )}
  .site-title {
    font-size: 24px;
    text-align: center;
    /* hide if larger than mobile */
    @media (min-width: 763px) {
      display: none;
    }
    a {
      color: black;
      text-decoration: none;
    }
  }

  @media print {
    display: none;
  }
`
const MobileMenu = styled.div`
  display: none;
  ${screenBelow(
    screen.mobile,
    `
      display:block;
      `
  )}
`
