import React, { useContext } from "react"
import styled from "styled-components"

import { userMenuContext } from "./layout"
import { screenAbove, screen } from "../theme/mediaQueries"

const UserSettingsMenuToggle = ({ className }) => {
  const userMenuState = useContext(userMenuContext)
  const { userMenuOpenState, setUserMenuOpenState } = userMenuState
  console.log(userMenuOpenState)
  return (
    <button
      className={className}
      onClick={() => setUserMenuOpenState(!userMenuOpenState)}
    >
      <div className="img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1529040181623-e04ebc611e25?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
          alt="profile"
        />
      </div>
    </button>
  )
}

export default styled(UserSettingsMenuToggle)`
  width: 80px;
  height: 80px;
  padding: 0px;
  outline: 0;
  background: transparent;
  border: transparent;
  justify-content: center;
  padding: 10px;
  align-items: center;

  ${screenAbove(
    screen.mobile,
    `
    margin-right: 40px;
  `
  )}
  &:focus {
    .img-wrapper {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
  &:active {
    .img-wrapper {
      transform: translateY(1px);
    }
  }
  .img-wrapper {
    overflow: hidden;
    max-height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 100%;
    border-radius: 50%;
    img {
      /* border-radius: 50%; */
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center center;
      margin: 0;
    }
  }
`
