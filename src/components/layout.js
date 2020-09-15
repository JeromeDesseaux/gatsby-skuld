import React from "react"
import { Wrapper, Footer, FooterContainer } from "./layout/core"
import Navbar from "./navbar/navbar"
import colors from "../style/colors"

const headerStyle = {
  borderTop: `8px solid ${colors.darkenPrimary}`,
}

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <header style={headerStyle}>
          <Navbar />
        </header>
        <main style={{ flex: "1 1 auto" }}>{children}</main>
        <Footer>
          <FooterContainer>
            <div>© {new Date().getFullYear()} Jérôme Desseaux</div>
            <div>Réseaux</div>
          </FooterContainer>
        </Footer>
      </Wrapper>
    )
  }
}

export default Layout
