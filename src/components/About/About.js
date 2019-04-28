import React from 'react';
import styled from 'styled-components';
import { styles, Title } from '../../utils'
import Works from './Works';
import Materials from './Materials';


const AboutWrapper = styled.div`
	width: 100%;
	border: 2px solid red;
	background: ${styles.colors.mainBackground};


`;

const About = () => {
	return (
		<AboutWrapper>
			<Title title="Немного о нас" message="Наша компания предлагает комплекс работ по токарной обработке металлических деталей."/>
			<Works />
			<Materials/>
		</AboutWrapper>
	);
};

export default About;