import styled from 'styled-components';

import PerformanceGraph from '../userGraphs/UserPerformance';

const UserPerformance = ({ datas }) => {
	return (
		<Section>
			<PerformanceGraph datas={datas} />
		</Section>
	);
};

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
