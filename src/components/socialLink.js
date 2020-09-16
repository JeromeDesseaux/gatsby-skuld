import React from "react"
import styled from "styled-components"
import colors from "../style/colors"

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 8px 0 8px;
  padding: 0 5px 0 5px;
  font-size: 1.1rem;
  color: white;
  box-shadow: none;
  transition: 0.2s;
  &:hover {
    color: ${colors.secondary};
  }
`

const SocialLink = props => {
  const { to, icon, label } = props
  return (
    <StyledLink href={to} target="_blank" rel="noreferrer" aria-label={label}>
      <i class={icon}></i>
    </StyledLink>
  )
}

export default SocialLink
