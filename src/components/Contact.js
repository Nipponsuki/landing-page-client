import React from "react"
import styled from "styled-components"
import { styles, Title } from "../utils"
import map from "../images/map-1.svg"
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaMailBulk,
  FaViber,
  FaVk,
  FaOdnoklassnikiSquare,
} from "react-icons/fa"

const StyledContact = styled.div`
  width: 100%;
  color: ${styles.colors.darkAccent};
`
const ContactForm = styled.div`
  width: 80%;
  background: ${styles.colors.mainBackground};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: center;
  color: ${styles.colors.headerBackground};
  overflow: hidden;

  @media (max-width: 1050px) {
    flex-direction: column;
    width: 90%;
  }
`
const MessageUs = styled.div`
  text-align: center;
  width: 100%;
  padding: 2rem;
  h4 {
    font-size: 3rem;
    margin-top: 1rem;
  }
  form {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      border: 2px solid ${styles.colors.headerBackground};
      font-family: inherit;
      font-size: 1.8rem;
      transition: all 0.3s ease;
      background: none;
      color: ${styles.colors.headerBackground};
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
        0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      width: 80%;
      height: 4rem;
      padding-left: 0.5rem;

      &:focus {
        outline: none;
        border: 2px solid rgba(55, 116, 178, 1);
      }

      &::-webkit-input-placeholder {
        font-family: inherit;
        font-size: 1.8rem;
        color: ${styles.colors.headerBackground};
      }
    }

    textarea {
      margin-top: 1rem;
      border: 2px solid ${styles.colors.headerBackground};
      font-family: inherit;
      font-size: 1.8rem;
      transition: all 0.3s ease;
      background: none;
      color: ${styles.colors.headerBackground};
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
        0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      width: 80%;
      height: 15rem;

      &:focus {
        outline: none;
        border: 2px solid rgba(55, 116, 178, 1);
      }
    }

    .form-btn {
      border: 0;
      width: 80%;
      border-radius: 3px;
      color: white;
      text-align: center;
      cursor: pointer;
      margin: 1rem 0;
      outline: none;
      transition: all 0.4s ease;
      background: #ff6584;
      height: 3.6rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
        0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
      font-family: inherit;
      font-weight: bold;

      .icon {
        margin-left: 1rem;
      }

      &:hover {
        background: ${styles.colors.darkAccent};
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2),
          0 2px 1px -1px rgba(0, 0, 0, 0.25), 0 1px 3px 0 rgba(0, 0, 0, 0.28);
      }
    }
  }
`
const Info = styled.div`
  text-align: center;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  background: ${styles.colors.darkAccent};
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1050px) {
    align-items: center;
  }

  h4 {
    font-size: 3rem;
    margin-top: 1rem;
    align-self: center;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  .icon {
    font-size: 4rem;
    margin-right: 1rem;
    color: ${styles.colors.main};
  }
  p {
    font-size: 1.8rem;
    text-align: left;
  }
`

const SnsIcons = styled.div`
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

const Contact = () => {
  return (
    <StyledContact>
      <Title title="Как с нами связаться" />
      <ContactForm>
        <MessageUs>
          <h4>Отправить нам сообщение</h4>
          <form action="">
            <input type="email" placeholder="Email Address" />
            <textarea />
            <button className="form-btn">
              Отправить
              <FaEnvelopeOpenText className="icon" />
            </button>
          </form>
        </MessageUs>
        <Info>
          <h4>Контактная информация</h4>
          <InfoWrapper>
            <FaMapMarkerAlt className="icon" />
            <p>
              {" "}
              Чувашская Республика, г.Чебоксары, <br />
              ул. Ильбекова, 8 корп. 1{" "}
            </p>
          </InfoWrapper>
          <InfoWrapper>
            <FaMobileAlt className="icon" />
            <p>+ 7 981 991 99 99 </p>
          </InfoWrapper>
          <InfoWrapper>
            <FaMailBulk className="icon" />
            <p> inseryourmail@gmail.com</p>
          </InfoWrapper>
          <SnsIcons>
            <FaViber className="sns-icon" />
            <FaOdnoklassnikiSquare className="sns-icon" />
            <FaVk className="sns-icon" />
          </SnsIcons>
        </Info>
      </ContactForm>
    </StyledContact>
  )
}

export default Contact
