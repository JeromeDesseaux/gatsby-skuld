import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import colors from "../../style/colors"

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 8px 0 8px;
  padding: 0 5px 0 5px;
  font-size: 1.1rem;
  color: ${colors.primary};
  box-shadow: none;
  transition: 0.2s;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${colors.darkenSecondary};
    border-bottom: 1px solid ${colors.darkenSecondary};
  }
`

const activeStyle = {
  color: `${colors.darkenSecondary}`,
}

const NavbarLink = props => {
  const { to, children } = props
  const isHomepage = to === "/"
  return (
    <StyledLink to={to} activeStyle={activeStyle} partiallyActive={!isHomepage}>
      {children}
    </StyledLink>
  )
}

export default NavbarLink
