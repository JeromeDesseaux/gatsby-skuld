import React from "react"
import { Wrapper, Footer, FooterContainer } from "./layout/core"
import Navbar from "./navbar/navbar"
import SocialLink from "./socialLink"
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
            <div>© 2018 - {new Date().getFullYear()} Jérôme Desseaux</div>
            <div>
              <SocialLink
                to="https://twitter.com/jerome_desseaux"
                icon="devicon-twitter-plain"
                label="Lien vers mon profil Twitter"
              />
              <SocialLink
                to="https://www.linkedin.com/in/jeromedesseaux/"
                icon="devicon-linkedin-plain"
                label="Lien vers mon profil LinkedIn"
              />
              <SocialLink
                to="https://github.com/JeromeDesseaux"
                icon="devicon-github-plain"
                label="Lien vers mon profil GitHub"
              />
            </div>
            <div>
              Portez-vous bien{" "}
              <span role="img" aria-label="heart icon">
                ♥️
              </span>
            </div>
          </FooterContainer>
        </Footer>
      </Wrapper>
    )
  }
}

export default Layout
