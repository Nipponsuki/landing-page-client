import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { dataItems } from "./Gallery"

const Carousel = () => {
  const [image, setImage] = useState(0)
  useEffect(() => {
    return setImage(image)
  }, [])

  return (
    <div>
      {dataItems.map(item => (
        <img
          src={item.img}
          alt="photo product"
          onClick={() => setImage(item.img)}
        />
      ))}
      <div
        className="seleceted"
        style={{ width: "200px", border: "2px solid red" }}
      >
        {image && <img src={image} />}
      </div>
    </div>
  )
}

export default Carousel
