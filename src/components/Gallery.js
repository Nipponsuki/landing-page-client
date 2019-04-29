import React from "react"
import styled from "styled-components"
import { styles, Title } from "../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaPencilRuler } from "react-icons/fa"
import hero from "../images/hero.svg"

const data = [
  {
    id: 1,
    title: "втулки",
    width: "20mm",
    height: "30mm",
    length: "10mm",
  },
  {
    id: 2,
    title: "бонки",
    width: "20mm",
    height: "30mm",
    length: "10mm",
  },
  {
    id: 3,
    title: "бобышки",
    width: "20mm",
    height: "30mm",
    length: "10mm",
  },
  {
    id: 3,
    title: "стойки резьбовые",
    width: "20mm",
    height: "30mm",
    length: "10mm",
  },
  {
    id: 5,
    title: "шпильки",
    width: "20mm",
    height: "30mm",
    length: "10mm",
  },
]

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`
const StyledGallery = styled.div`
  background: ${styles.colors.mainBackground};
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Item = styled.div`
  width: 35rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: ${styles.colors.headerBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${styles.colors.darkAccent};
  margin: 7rem 2rem 6rem 2rem;
  padding-bottom: 1rem;

  @media (max-width: 860px) {
    width: unset;
  }
`
const ItemImg = styled.div`
  width: 90%;
  background: ${styles.colors.darkAccent};
  height: 30rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 3px;
  transform: translateY(-8rem);
  margin-bottom: 1rem;

  @media (max-width: 860px) {
    height: unset;
  }

  img {
    width: 100%;
  }
`
const ItemTitle = styled.div`
  color: #ff6584;
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: bold;
  margin-top: -7rem;
`
const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h5 {
    font-size: 1.8rem;
    text-transform: lowercase;
    font-weight: bold;
  }

  span {
    font-size: 1.8rem;
  }
`
const Icon = styled.div`
  font-size: 2rem;
`

const Gallery = () => {
  return (
    <StyledGallery>
      <Title title="Производимые изделия" />
      <GalleryWrapper>
        {data.map(item => (
          <Item>
            <ItemImg>
              <img src={hero} alt="product-image" />
            </ItemImg>
            <ItemTitle>{item.title}</ItemTitle>
            <Icon>
              <FaPencilRuler />
            </Icon>
            <ItemInfo>
              <InfoWrapper>
                <h5>Ширина:</h5> <span>{item.width}</span>
              </InfoWrapper>
              <InfoWrapper>
                <h5>Высота:</h5> <span>{item.height}</span>
              </InfoWrapper>
              <InfoWrapper>
                <h5>Длина:</h5> <span>{item.length}</span>
              </InfoWrapper>
            </ItemInfo>
          </Item>
        ))}
      </GalleryWrapper>
    </StyledGallery>
  )
}

export default Gallery
