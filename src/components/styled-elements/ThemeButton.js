import styled from "styled-components"
import { Link } from "gatsby"

import { primaryColor } from "../../theme/colors"
import { fonts } from "../../theme/fonts"

const ThemeButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: white !important;
  ${fonts("heading")}
  letter-spacing:1px;
  text-transform: uppercase;
  font-size: 14px;
  background: ${primaryColor};
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
`
export default ThemeButton
