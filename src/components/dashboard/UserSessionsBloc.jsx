import styled from 'styled-components';

import UserSessionsGraph from '../userGraphs/UserSessions';

const UserSessions = ({ datas }) => {
	return (
		<Section>
			<h3>Durée moyenne des sessions</h3>
			<UserSessionsGraph datas={datas} />
		</Section>
	);
};

const Section = styled.section`
	& * {
		font-family: roboto;
	}

	& h3 {
		font-size: 15px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.7);
		position: absolute;
		width: 140px;
		left: 14%;
		top: 8%;
	}
	margin-top: 0;
	max-width: 258px;
	width: 100%;
	max-height: 263px;
	height: 100%;
	background-color: #ff0000;
	border-radius: 10px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.021);
	overflow: hidden;
	position: relative;
`;

export default UserSessions;
