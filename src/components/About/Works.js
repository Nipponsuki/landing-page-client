import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import hero from '../../images/hero.svg';

const WorksWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	padding: 2rem;
`;

const Right = styled.div`
	width: 90%;

img{
	width: 80%;
}
`;

const Left = styled.div`
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

const Works = () => {
	return (
		<WorksWrapper>
			<Right>
				<img src={hero} alt="works" />
			</Right>
			<Left>
				<h2>
					Выполняемые работы
				</h2>
				<p>
					Изделия выполняются в кратчайшие сроки, имеют высокое качество и низкие цены.
				</p>
				<p>
					Процесс обработки деталей включает следующие виды работ: <span>токарные, сверление, фрезеровка, нарезка резьбы.</span>
				</p>

			</Left>
		</WorksWrapper>
	);
};

export default Works;