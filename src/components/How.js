import React from "react"
import styled from "styled-components"
import { styles, Title } from "../utils"
import {
  FaWarehouse,
  FaRegEnvelope,
  FaRegArrowAltCircleRight,
} from "react-icons/fa"

import { Link } from "gatsby"

const StyledHow = styled.div`
  color: ${styles.colors.darkAccent};
  background: ${styles.colors.headerBackground};
  padding-bottom: 2rem;
`

const StyledList = styled.ul`
  font-size: 2rem;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: ${styles.colors.darkAccent};
  color: ${styles.colors.headerBackground};
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 95%;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;

  .icon {
    font-size: 5rem;
    margin: 0;

    @media (max-width: 500px) {
      display: none;
    }
  }
  h4 {
    margin: 0;
  }
`

const How = () => {
  return (
    <StyledHow>
      <Title title="У нас всё просто" />
      <StyledList>
        <Item>
          <h4>
            1. Ознакамливаетесь с нашей{" "}
            <Link to="/#products" style={{ color: "#ff6584" }}>
              продукцией.
            </Link>
          </h4>
          <FaWarehouse className="icon" />
        </Item>
        <Item>
          <h4>
            2. Проходите на страницу с нашими{" "}
            <Link to="/#contacts" style={{ color: "#ff6584" }}>
              контактами.
            </Link>
          </h4>
          <FaRegArrowAltCircleRight className="icon" />
        </Item>
        <Item>
          <h4>
            3. Налаживаете с нами контакт по любому указанному там виду связи.
          </h4>
          <FaRegEnvelope className="icon" />
        </Item>
      </StyledList>
    </StyledHow>
  )
}

export default How
