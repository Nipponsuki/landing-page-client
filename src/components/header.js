import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import Hero from "./Hero"
import heroImage from "../images/hero.svg"

const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  background: url(${heroImage});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: right;
  padding: 2rem;

  @media (max-width: 1200px) {
    /* display: flex;
		align-items: start;
		justify-content: space-between;
		flex-direction: column; */
    height: auto;
  }
  @media (max-width: 800px) {
    /* display: flex;
		align-items: start;
		justify-content: space-between;
		flex-direction: column; */
    height: auto;
  }
`

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Navbar />
        <Hero />
      </StyledHeader>
    </>
  )
}

export default Header
