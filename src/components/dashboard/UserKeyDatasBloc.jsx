import styled from 'styled-components';
import caloriesIcon from '../../assets/Calories.svg';
import proteinIcon from '../../assets/Protein.svg';
import carboHydrateIcon from '../../assets/CarboHydrate.svg';
import lipidIcon from '../../assets/Lipids.svg';

const UserKeyDatas = ({ datas }) => {
	const UserDatas = datas.data.keyData;
	return (
		<KeyDatas>
			<Article id="calories">
				<i>
					<img src={caloriesIcon} alt="" />
				</i>
				<p>
					<b>{UserDatas.calorieCount ?? 'Pas encore de données !'}kCal</b>
					<br></br>
					Calories
				</p>
			</Article>
			<Article id="proteins">
				<i>
					<img src={proteinIcon} alt="" />
				</i>
				<p>
					<b>{UserDatas.proteinCount ?? 'Pas encore de données !'}g</b>
					<br></br>
					Protéines
				</p>
			</Article>
			<Article id="carbohydrate">
				<i>
					<img src={carboHydrateIcon} alt="" />
				</i>
				<p>
					<b>{UserDatas.carbohydrateCount ?? 'Pas encore de données !'}g</b>
					<br></br>
					Glucides
				</p>
			</Article>
			<Article id="lipids">
				<i>
					<img src={lipidIcon} alt="" />
				</i>
				<p>
					<b>{UserDatas.lipidCount ?? 'Pas encore de données !'}g</b>
					<br></br>
					Lipides
				</p>
			</Article>
		</KeyDatas>
	);
};

const KeyDatas = styled.section`
	font-family: roboto;
	display: flex;

	width: 100%;
	max-width: 258px;
	height: 603px;
	flex-direction: column;
	justify-content: space-between;
	gap: 10.1%;
	place-self: start start;
`;

const Article = styled.article`
	box-sizing: border-box;
	padding: 20px;
	height: 124px;
	max-width: 258px;
	width: 100%;
	background-color: #fbfbfb;
	border-radius: 10px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.021);

	display: flex;
	justify-content: space-around;
	align-items: center;

	&#calories i {
		background-color: rgba(255, 0, 0, 0.15);
	}
	&#proteins i {
		background-color: rgba(74, 184, 255, 0.15);
	}
	&#carbohydrate i {
		background-color: rgba(253, 204, 12, 0.15);
	}
	&#lipids i {
		background-color: rgba(253, 81, 129, 0.15);
	}

	& i {
		width: 60px;
		height: 60px;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& p {
		width: 95px;
		font-size: 14px;
		font-weight: 500;
		color: #74798c;
		& b {
			font-size: 20px;
			font-weight: 700;
			color: #282d30;
		}
	}
`;

export default UserKeyDatas;
