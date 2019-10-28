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
        <Link to="/discussion-guides">Discussion Guides</Link>
      </li>
      {
        <li>
          <Link to="/book-chat">Book Chat</Link>
        </li>
      }
      <li>
        <Link to="/about-us">About Our Club</Link>
      </li>
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
    
    margin: 0px;
    &:nth-child(odd) {
      /* background: ${lightBlack}; */
    }
    
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    display:block;
    width:100%;
    padding: 20px;
    height:100%;
    &:hover,
    &:focus {
      
      background: ${lightBlack};
      color: white;
    }
    ${fonts("heading")}
    font-size: 20px;
  }
  @keyframes slideIn {
    from{
      opacity:.3;
      transform:translateY(-100px);
    }
  }
  ${({ layout }) =>
    layout === "mobile" &&
    `
    animation: slideIn .2s ease-in;
    padding-top:10px;
    position:absolute;
    top:80px;
    left:0;
    
    background:${black};
    width:250px;
    `}
`
