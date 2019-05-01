import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import hero from "../../images/what.svg"

const WorksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 2rem;

  @media (max-width: 900px) {
    padding: none;
  }
`

const Right = styled.div`
  width: 90%;

  img {
    width: 80%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const Left = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: #fff;
  width: 80%;
  padding: 2rem;

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    color: ${styles.colors.darkAccent};
  }

  p {
    font-size: 2rem;
    text-align: left;
    color: ${styles.colors.mainBackground};
    font-weight: bold;
    span {
      color: #ff0000;
      font-weight: bold;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`

const Works = () => {
  return (
    <WorksWrapper>
      <Right>
        <img src={hero} alt="works" />
      </Right>
      <Left>
        <h2>Выполняемые работы</h2>
        <p>
          Изделия выполняются в кратчайшие сроки, имеют высокое качество и
          низкие цены.
        </p>
        <p>
          Процесс обработки деталей включает следующие виды работ:{" "}
          <span>
            токарные, сверление, фрезеровка, нарезка резьбы, антикоррозионное
            покрытие.
          </span>
        </p>
      </Left>
    </WorksWrapper>
  )
}

export default Works
