import React from 'react';
import logo from '../images/logo-1.png'
import styled from 'styled-components';
import { styles } from '../utils'

const StyledNavbar = styled.nav`

img{
	border-radius: 3px;
	border: 2px solid ${styles.colors.darkAccent};
	box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);

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