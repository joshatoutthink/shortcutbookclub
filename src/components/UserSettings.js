import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const UserSettings = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <Link>My Profile</Link>
      </li>
      <li>
        <Link>My Settings</Link>
      </li>
      <li>
        <Link>&larr; Login</Link>
      </li>
    </ul>
  )
}

export default styled(UserSettings)`
  z-index: 1;
  position: absolute;
  width: 150px;
  right: 10px;
  margin: 0px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  li {
    list-style: none;
  }
`
