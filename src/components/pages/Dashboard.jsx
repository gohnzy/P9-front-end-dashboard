///// Suppression temporaire des avertissements concernant defaultProps
// Une mise à jour majeure arrive et va changer l'utilisation de defaultProps
const originalWarn = console.error;

console.error = (message, ...args) => {
	if (
		typeof message === 'string' &&
		message.includes('XAxis' && 'defaultProps' && 'major release')
	) {
		return;
	}
	originalWarn(message, ...args);
};
/////

import { useEffect, useState } from 'react';
import styled from 'styled-components';

// basical components
import UserHeader from '../dashboard/UserHeader';
import Error from './Error';

// graphs components
import UserKeyDatas from '../dashboard/UserKeyDatasBloc';
import UserActivities from '../dashboard/UserActivitiesBloc';
import UserSessions from '../dashboard/UserSessionsBloc';
import UserPerformance from '../dashboard/UserPerformanceBloc';
import UserScore from '../dashboard/UserScoreBloc';

// fetch data function
import ThisUser from '../../utils/userDatas';

/**
 *
 * @param {number} id - user's id
 * @returns {JSX.Element} User's dashboard component
 */

const UserHomepage = ({ id }) => {
	// Store user's datas
	const [userDatas, setUserDatas] = useState(null);
	// Loading state to wait for datas
	const [loading, setLoading] = useState(true);
	// State for error handling
	const [error, setError] = useState(null);

	// Fetch datas here every time component is refreshed
	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const datas = await ThisUser(id);
				if (datas.datas === 'error') {
					setError(true);
				}
				setUserDatas(datas);

				// Timeout to ensure datas are fetched
				setTimeout(() => {
					setLoading(false);
				}, 500);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchUserData();
	}, [id]);

	// Loader is returned by default
	if (loading) {
		return <Loader />;
	}

	// Return error
	if (error) {
		return <Error message={'Problème lors de la collecte des données...'} />;
	}

	// Dashboard rendering here

	return (
		<Main>
			{/* Welcome message component */}
			<UserHeader user={userDatas.user ?? 'Unknown'} />

			{/* Dashboard elements */}
			<Container>
				{/* Activities bloc */}
				<UserActivities datas={userDatas.activities} />
				{/* Statistics bloc */}
				<UserKeyDatas datas={userDatas.user ?? 'Undefined'} />

				{/* Element's bloc for seperated for display */}
				<BottomDatasContainer>
					{/* Sessions bloc */}
					<UserSessions datas={userDatas.sessions} />
					{/* Performance bloc */}
					<UserPerformance datas={userDatas.performance} />
					{/* Score bloc */}
					<UserScore datas={userDatas.user} />
				</BottomDatasContainer>
			</Container>
		</Main>
	);
};

// Styles
const Loader = styled.div`
	margin: 25vh auto;
	width: 50px;
	aspect-ratio: 1;
	display: grid;
	border-radius: 50%;
	background: linear-gradient(
				0deg,
				rgb(0 0 0/50%) 30%,
				#0000 0 70%,
				rgb(0 0 0/100%) 0
			)
			50%/8% 100%,
		linear-gradient(90deg, rgb(0 0 0/25%) 30%, #0000 0 70%, rgb(0 0 0/75%) 0)
			50%/100% 8%;
	background-repeat: no-repeat;
	animation: l23 1s infinite steps(12);
	&::before,
	&::after {
		content: '';
		grid-area: 1/1;
		border-radius: 50%;
		background: inherit;
		opacity: 0.915;
		transform: rotate(30deg);
	}
	&::after {
		opacity: 0.83;
		transform: rotate(60deg);
	}
	@keyframes l23 {
		100% {
			transform: rotate(1turn);
		}
	}
`;

const Main = styled.main`
	padding-top: 30px;
	box-sizing: border-box;
	margin-left: 15%;
	height: 90vh;
	overflow: hidden;
	place-content: center;
`;

const Container = styled.div`
	margin-top: 5vh;
	display: grid;
	grid-template-columns: 75% 20%;
	grid-template-rows: 36.5% 30%;
	grid-row-gap: 30px;
	grid-column-gap: 1px;
	max-width: 1240px;
`;

const BottomDatasContainer = styled.section`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 835px;
	height: 100%;
	max-height: 32vh;

	& * {
		width: 32.5%;
	}
`;

export default UserHomepage;
