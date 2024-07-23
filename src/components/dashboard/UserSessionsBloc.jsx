import styled from 'styled-components';

// Import user's sessions graph
import UserSessionsGraph from '../userGraphs/UserSessions';

/**
 * Component to display user's daily activity.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.datas - The data object containing user data ; decomposed in graph component.
 * @returns {JSX.Element} The JSX code to render the user's activity section.
 */

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
