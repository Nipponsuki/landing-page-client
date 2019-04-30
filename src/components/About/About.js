import React from "react"
import styled from "styled-components"
import { styles, Title } from "../../utils"
import Works from "./Works"
import Materials from "./Materials"
import Slide from "react-reveal/Slide"

const AboutWrapper = styled.div`
  width: 100%;
  background: ${styles.colors.mainBackground};
  padding: 2rem 2rem 0 2rem;

  @media (max-width: 500px) {
    padding: 2rem 0;
  }
`

const About = () => {
  return (
    <AboutWrapper>
      <Title
        title="Немного о нас"
        message="Наша компания предлагает комплекс работ по токарной обработке металлических деталей."
      />
      <Slide left>
        <Works />
      </Slide>
      <Slide right>
        <Materials />
      </Slide>
    </AboutWrapper>
  )
}

export default About
