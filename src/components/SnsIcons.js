import React from "react"
import styled from "styled-components"
import { styles, Title } from "../utils"
import { FaViber, FaVk, FaOdnoklassnikiSquare } from "react-icons/fa"

const StyledIcons = styled.div`
  align-self: center;
  margin-top: 4rem;
  width: 60%;
  display: flex;
  align-items: start;
  justify-content: space-around;

  .sns-icon {
    font-size: 3rem;
    cursor: pointer;
    color: #ff6584;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      color: ${styles.colors.headerBackground};
    }
  }
`

const SnsIcons = () => {
  return (
    <StyledIcons>
      <FaViber className="sns-icon" />
      <FaOdnoklassnikiSquare className="sns-icon" />
      <FaVk className="sns-icon" />
    </StyledIcons>
  )
}

export default SnsIcons
