import React from "react"
import { Wrapper, Footer } from "./layout/core"
import Navbar from "./navbar/navbar"

const headerStyle = {
  borderTop: "8px solid #234356",
}

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <header style={headerStyle}>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

export default Layout
