import styled from 'styled-components';

// Import graph
import ActivitiesGraph from '../userGraphs/UserActivities';

/**
 * Component to display user's daily activity.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.datas - The data object containing user data.
 * @param {Object[]} props.datas.data - The array of activities objects.
 * @param {number} props.datas.data[].kilogram - The weight in kilograms.
 * @param {number} props.datas.data[].calories - The calories burned.
 * @returns {JSX.Element} The JSX code to render the user's activity section.
 */

// User's activity components, used on user's dashboard
const UserActivities = ({ datas }) => {
	const activity = datas.data;
	const sessions = activity.sessions.map((session, index) => ({
		index: index + 1,
		kilogram: session.kilogram,
		calories: session.calories,
	}));
	return (
		<Section>
			<SectionHeader>
				<p>Activité quotidienne</p>
				<i id="poids">
					<div className="pin black"></div>
					Poids (kg)
				</i>
				<i id="calories-brulees">
					<div className="pin red"></div>
					Calories brûlées (kCal)
				</i>
			</SectionHeader>
			<ActivitiesGraph datas={sessions} />
		</Section>
	);
};

// Styles
const Section = styled.section`
	& * {
		font-family: Roboto;
		font-weight: 500;
	}
	padding: 15px 30px;
	box-sizing: border-box;
	width: 100%;
	max-width: 835px;
	height: 320px;
	border-radius: 10px;
	background-color: #fbfbfb;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.021);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const SectionHeader = styled.div`
	width: 100%;
	height: 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& p {
		width: 60%;
		color: #20253a;
		font-size: 15px;
	}

	& i {
		width: fit-content;
		color: #74798c;
		font-size: 14px;
		font-style: normal;
		display: flex;
		align-items: center;
		gap: 5px;

		& .pin {
			width: 8px;
			height: 8px;
			border-radius: 50%;
			margin-top: -2px;

			&.black {
				background-color: #282d30;
			}

			&.red {
				background-color: #e60000;
			}
		}
	}
`;

export default UserActivities;
