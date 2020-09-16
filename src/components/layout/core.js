import styled from "styled-components"
import colors from "../../style/colors"
import responsive from "../../style/responsive"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  display: flex;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  flex: 0 1;
  padding: 15px;
  align-items: center;
  background-color: ${colors.darkenPrimary};
  color: white;
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  flex: 0 0 60%;
  padding: 5px;
  @media (max-width: ${responsive.minScreenResponsiveSize}px) {
    flex: 0 0 90%;
  }
`

const Container = styled.div`
  padding-top: 25px;
  width: 60%;
  margin: auto;
  text-align: justify;
  @media (max-width: ${responsive.minScreenResponsiveSize}px) {
    width: 100%;
    padding: 15px;
  }
`

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`

export { Wrapper, Footer, Container, ArticleContainer, FooterContainer }
