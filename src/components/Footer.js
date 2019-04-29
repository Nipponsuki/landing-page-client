import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

const StyledFooter = styled.footer`
  background: ${styles.colors.mainBackground};
  width: 100%;
  margin-top: 5rem;
  box-shadow: -3px -2px 1px 0 rgba(0, 0, 0, 0.14),
    -3px -2px 1px -1px rgba(0, 0, 0, 0.12), -3px -3px 3px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
  font-size: 1.8rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      Copyright &copy; {new Date().getFullYear()} VolgaBulgar
    </StyledFooter>
  )
}

export default Footer
