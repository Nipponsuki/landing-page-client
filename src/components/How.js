import React from 'react';
import styled from 'styled-components';
import { styles } from '../utils';

const StyledHow = styled.div`
	color: ${styles.colors.darkAccent};
	background: ${styles.colors.headerBackground};

`;

const How = () => {
	return (
		<StyledHow>
			how
		</StyledHow>
	);
};

export default How;