import React from "react"
import logo from "../images/logo-1.png"
import styled from "styled-components"
import { styles } from "../utils"
import { FaViber, FaVk, FaOdnoklassnikiSquare } from "react-icons/fa"

const Icons = styled.div`
  align-self: center;
  display: flex;
  align-items: start;
  justify-content: center;
  align-self: start;

  .sns-icon {
    font-size: 3rem;
    cursor: pointer;
    color: #ff6584;
    transition: all 0.3s ease;
    margin-right: 1rem;

    &:hover {
      transform: scale(1.05);
      color: ${styles.colors.darkAccent};
    }
  }
`

const StyledNavbar = styled.nav`
		padding-left: 1rem;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;

		.image-container{
			border-radius: 3px;
			border: 2px solid ${styles.colors.darkAccent};
			box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
			width: 22rem;
			height: 10rem;
	}

		img{
			/* border-radius: 3px;
			border: 2px solid ${styles.colors.darkAccent};
			box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20); */
			width: 100%;
			height: 100%;
/* 
	@media(max-width: 700px){
		width: 80%;
	}
	@media(max-width: 500px){
		width: 70%;
	} */
	.nav-icons{
		width: 20%;
	}

}
	
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="image-container">
        <img src={logo} alt="company-name" />
      </div>
      <Icons>
        <FaViber className="sns-icon" />
        <FaOdnoklassnikiSquare className="sns-icon" />
        <FaVk className="sns-icon" />
      </Icons>
    </StyledNavbar>
  )
}

export default Navbar
