import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

const StyledHero = styled.div`
  width: 40%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  background: ${styles.colors.darkAccent};
  align-self: end;
  padding: 2rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin-top: 5rem;
  margin-left: 1rem;

  @media (max-width: 1025px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 95%;
    justify-content: space-between;
  }
`

const HeroTitle = styled.h1`
  font-size: 4.5rem;
`
const HeroText = styled.p`
  font-size: 2rem;
`
const HeroButton = styled.button`
  border: 0;
  border-radius: 3px;
  color: white;
  text-align: center;
  cursor: pointer;
  margin: 1rem 0;
  outline: none;
  transition: all 0.4s ease;
  background: #ff6584;
  height: 3.6rem;
  width: 12rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  font-family: inherit;
  font-weight: bold;

  &:hover {
    background: ${styles.colors.lightAccent};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2),
      0 2px 1px -1px rgba(0, 0, 0, 0.25), 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <HeroTitle>Мы предлагаем</HeroTitle>
      <HeroText>
        Комплекс работ по токарной обработке металлических деталей
      </HeroText>
      <HeroButton>Изделия</HeroButton>
    </StyledHero>
  )
}

export default Hero
