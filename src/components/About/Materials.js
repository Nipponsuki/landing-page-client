import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import hero from "../../images/mats-1.svg"

const MatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
`

const Right = styled.div`
  width: 80%;
  padding: 2rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: #fff;

  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    padding: none;
  }

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    color: ${styles.colors.darkAccent};
  }

  p {
    font-size: 2rem;
    text-align: left;
    font-weight: bold;
    color: ${styles.colors.mainBackground};

    span {
      color: #ff0000;
      font-weight: bold;
      /* text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5); */
    }
  }
`

const Left = styled.div`
  width: 90%;

  img {
    width: 80%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const Materials = () => {
  return (
    <MatWrapper>
      <Right>
        <h2>Используемые материалы</h2>
        <p>
          Наше основное сырье:{" "}
          <span>
            цветные сплавы, автоматные стали, стали другие круглого, квадратного
            и шестигранного сечения.
          </span>
        </p>
      </Right>
      <Left>
        <img src={hero} alt="materials" />
      </Left>
    </MatWrapper>
  )
}

export default Materials
