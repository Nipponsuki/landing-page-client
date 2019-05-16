import React, { useRef, useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { FaRegTimesCircle } from "react-icons/fa"
import { styles } from "../utils"

const show = keyframes`
	to {
		transform: scale(1);
	}
`

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  transition: all 0.3s ease;
  transform: scale(1.5);
  animation: ${show} 0.3s ease forwards;
`

const StyledModal = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 90%;
    height: 90%;
  }

  .icon {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 3rem;
    cursor: pointer;
    color: ${styles.colors.darkAccent};
  }

  .main {
    width: 100%;
    height: 40rem;
    object-fit: contain;
    border-radius: 5px;

    @media (max-width: 1024px) {
      height: 100%;
    }
  }
`

const SmallGallery = styled.div`
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Item = styled.div`
  padding: 1rem;
  overflow: hidden;
  width: 100%;
  border-radius: 5px;
  object-fit: contain;

  img {
    width: 100%;
    cursor: pointer;
  }
`

const Modal = ({ closeModal, data, image }) => {
  const [selectedImage, setSelectedImage] = useState(image)
  const ref = useRef()
  useOnClickOutside(ref, () => closeModal())
  return (
    <StyledWrapper>
      <StyledModal ref={ref}>
        <img src={selectedImage} alt="product image" className="main" />
        <FaRegTimesCircle className="icon" onClick={() => closeModal()} />
        <SmallGallery>
          {data.map(item => (
            <Item>
              <img
                src={item}
                alt=""
                onClick={() => {
                  setSelectedImage(item)
                }}
              />
            </Item>
          ))}
        </SmallGallery>
      </StyledModal>
    </StyledWrapper>
  )
}

export default Modal

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
}
