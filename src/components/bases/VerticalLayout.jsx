import styled from 'styled-components';
import { Link } from 'react-router-dom';

import yoga from '../../assets/Yoga.svg';
import swim from '../../assets/Swim.svg';
import cycle from '../../assets/Cycle.svg';
import weight from '../../assets/Weight.svg';

const VerticalLayout = () => {
	return (
		<Layout>
			<div>
				<ActivitiesIcon id="yoga">
					<img src={yoga} alt="" />
				</ActivitiesIcon>
				<ActivitiesIcon id="swim">
					<img src={swim} alt="" />
				</ActivitiesIcon>
				<ActivitiesIcon id="cycle">
					<img src={cycle} alt="" />
				</ActivitiesIcon>
				<ActivitiesIcon id="weightlift">
					<img src={weight} alt="" />
				</ActivitiesIcon>
			</div>
			<p>Copyright, SportSee 2020</p>
		</Layout>
	);
};

const Layout = styled.nav`
	background-color: black;
	width: 7.1%;
	height: 90vh;
	margin: 0;
	float: left;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	& div {
		margin-top: 10vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}

	& p {
		width: 138px;
		font-family: roboto;
		font-weight: 500;
		font-size: 12px;
		color: white;
		transform: rotate(-90deg);
	}
`;

const ActivitiesIcon = styled(Link)`
	width: 64px;
	height: 64px;
	background-color: white;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;

	& img {
		width: 32px;
		height: 32px;
	}
`;

export default VerticalLayout;
