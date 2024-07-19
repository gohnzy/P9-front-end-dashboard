import styled from 'styled-components';

import ScoreGraph from '../userGraphs/UserScore';

const UserScore = ({ datas }) => {
	return (
		<Section>
			<ScoreGraph datas={datas} />
			<p>de votre objectif</p>
		</Section>
	);
};

const Section = styled.section`
	& * {
		font-family: roboto;
	}
	position: relative;
	margin-top: 0;
	max-width: 258px;
	width: 100%;
	max-height: 263px;
	height: 100%;
	background-color: #fbfbfb;
	border-radius: 10px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.021);
	color: white;

	& p {
		position: absolute;
		top: 47%;
		left: 40%;
		z-index: 50;
		color: #74798c;
		font-size: 16px;
		font-weight: 500;
	}
`;

export default UserScore;
