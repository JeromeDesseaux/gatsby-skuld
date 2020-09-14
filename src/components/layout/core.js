import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const Container = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`

export { Wrapper, Footer, Container }
