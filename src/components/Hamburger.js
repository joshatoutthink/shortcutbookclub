import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { mobileMenuContext } from "./layout"

const Hamburger = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hamburger.svg" }) {
        publicURL
      }
    }
  `)
  const menuState = useContext(mobileMenuContext)
  const { menuOpenState, setMenuOpenState } = menuState
  return (
    <button
      className={className}
      onClick={() => setMenuOpenState(!menuOpenState)}
    >
      {console.log(menuOpenState)}
      <img src={data.file.publicURL} alt="" width="32" height="32" />
    </button>
  )
}

export default styled(Hamburger)`
  &:focus {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(1px);
  }
  background: transparent;
  display: flex;
  outline: 0;
  border: transparent;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    margin-bottom: 0px;
  }
`
