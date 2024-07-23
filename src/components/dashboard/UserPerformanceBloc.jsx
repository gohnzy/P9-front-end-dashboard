import styled from 'styled-components';

// Import user's performances graph
import PerformanceGraph from '../userGraphs/UserPerformance';

/**
 *
 * @param {Object} props - The component props.
 * @param {Object} props.datas - The data object containing user data ; decomposed in graph component.
 * @returns
 */

// User's performances component
const UserPerformance = ({ datas }) => {
	return (
		<Section>
			<PerformanceGraph datas={datas} />
		</Section>
	);
};

// Styles
const Section = styled.section`
	& * {
		font-family: roboto;
	}
	margin-top: 0;
	max-width: 258px;
	width: 100%;
	max-height: 263px;
	height: 100%;
	background-color: #282d30;
	border-radius: 10px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.021);
	color: white;
`;

export default UserPerformance;
