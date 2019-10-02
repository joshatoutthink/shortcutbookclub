import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Hamburger from "./Hamburger"

import { fonts } from "../theme/fonts"
import { lightBlack, black } from "../theme/colors"

const MainMenu = ({ layout = "sidebar" }) => {
  return (
    <MenuStyled layout={layout}>
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/discussion-guides">Discussions</Link>
      </li>
      {/* <li>
        <Link>Polling</Link>
      </li>
      <li>
        <Link>About</Link>
      </li> */}
    </MenuStyled>
  )
}

export default MainMenu
const MenuStyled = styled.ul`
  margin: 0px;
  padding: 0px;
  z-index: 1;
  li {
    list-style: none;
    padding: 20px;
    margin: 0px;
    &:nth-child(odd) {
      background: ${lightBlack};
    }
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    &:hover,
    &:focus {
      color: white;
    }
    ${fonts("heading")}
    font-size: 20px;
  }
  ${({ layout }) =>
    layout === "mobile" &&
    `
    padding-top:10px;
    position:absolute;
    top:80px;
    left:0;
    min-height:100vh;
    background:${black};
    width:250px;
    `}
`
