import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import hero from '../../images/hero.svg';

const MatWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	padding: 2rem;
	margin-top: 2rem;
`;

const Right = styled.div`
	width: 80%;
	padding: 2rem;

	h2{
		font-size: 4rem;
		margin-bottom: 2rem;
		text-shadow: 0 1px 1px rgba(0,0,0, .5);
	}

	p{
		font-size: 2rem;
		span{
			color: #FF6584;
			text-shadow: 0 1px 1px rgba(0,0,0, .5);
		}
}
`;

const Left = styled.div`
	width: 90%;

	img{
		width: 80%;
	}

`;

const Materials = () => {
	return (
		<MatWrapper>
			<Right>
				<h2>
					Используемые материалы
				</h2>
				<p>
					Наше основное сырье: <span>цветные сплавы, автоматные стали, стали другие круглого, квадратного и шестигранного сечения.</span>
				</p>
			</Right>
			<Left>
				<img src={hero} alt="materials" />
			</Left>
		</MatWrapper>
	);
};

export default Materials;