import React from 'react';
import logo from '../images/logo-1.png'
import styled from 'styled-components';

const StyledNavbar = styled.nav`

img{
	@media(max-width: 700px){
		width: 80%;
	}
	@media(max-width: 500px){
		width: 70%;
	}
}
	
`;



const Navbar = () => {
	return (
		<StyledNavbar>
			<img src={logo} alt="company-name" />
		</StyledNavbar>
	)
}


export default Navbar;