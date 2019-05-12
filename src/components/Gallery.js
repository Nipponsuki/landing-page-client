import React, { useState } from "react"
import styled from "styled-components"
import { styles, Title } from "../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaPencilRuler } from "react-icons/fa"
import hero from "../images/hero.svg"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import Modal from "./Modal"
import one from "../images/gallery/1.webp"
import two from "../images/gallery/2.webp"
import three from "../images/gallery/3.webp"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const dataItems = [
  {
    id: 1,
    title: "бобышка",
    size: "Размеры по чертежам заказчика",
    img: one,
  },
  {
    id: 2,
    title: "бобышка",
    size: "Размеры по чертежам заказчика",

    img: two,
  },
  {
    id: 3,
    title: "втулки",
    size: "Размеры по чертежам заказчика",
    img: three,
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
  overflow: hidden;

  cursor: pointer;

  @media (max-width: 860px) {
    height: unset;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const ItemTitle = styled.div`
  color: #ff0000;
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
  const [modalIsShown, setModalIsShown] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const closeModal = () => {
    setModalIsShown(false)
  }

  const handleImage = image => {
    setModalIsShown(true)
    setSelectedImage(image)
  }

  return (
    <StyledGallery>
      <Title title="Образцы изготовливаемых изделий" />
      {modalIsShown && <Modal closeModal={closeModal} data={selectedImage} />}
      <Slide bottom>
        <GalleryWrapper>
          {dataItems.map(item => (
            <Item key={item.id}>
              <ItemImg onClick={() => handleImage(item.img)}>
                <img src={item.img} alt="product-image" id="products" />
              </ItemImg>
              <ItemTitle>{item.title}</ItemTitle>
              <Icon>
                <FaPencilRuler />
              </Icon>
              <ItemInfo>
                <InfoWrapper>
                  <span>{item.size}</span>
                </InfoWrapper>
              </ItemInfo>
            </Item>
          ))}
        </GalleryWrapper>
      </Slide>
    </StyledGallery>
  )
}

export default Gallery
