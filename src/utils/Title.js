import React from 'react';
import styled from 'styled-components';
import { styles } from '../utils';

const TitleWrapper = styled.div`
	text-align: center;
	margin-bottom: 5rem;

	h2{
		${styles.letterSpacing({ spacing: '0.1rem' })};
		font-size: 4.5rem;
		text-transform: ;		
		font-weight: bold;
	}

	p{
		font-size: 2rem;
	}

`;


const Title = ({ title, message }) => {
	return (
		<TitleWrapper>
			<h2>{title}</h2>
			<p>{message}</p>
		</TitleWrapper>
	);
};

export { Title };