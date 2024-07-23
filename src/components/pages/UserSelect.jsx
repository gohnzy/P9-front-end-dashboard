/////																		/////
//				This component is not asked for the project					 //
//		It allows dev user to swap between users - for developpement only	 //
//		 Accessible from base URL '/', which is the default page opened		 //
/////																		/////
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserSelect = ({ datas }) => {
	return (
		<Section>
			<h1>Change user here (implemented for test use only)</h1>
			{datas.data.map((user, key) => (
				<StyledLink key={key} to={`user/${user.id}`}>
					<h2>{user.userInfos.firstName}</h2>
				</StyledLink>
			))}
		</Section>
	);
};

const Section = styled.section`
	& * {
		font-family: roboto;
	}

	& h1 {
		flex: 1 1 100%;
		text-align: center;
		font-style: italic;
	}
	height: fit-content;
	width: 1000px;
	display: flex;
	justify-content: center;
	gap: 20px;
	padding: 30px;
	box-sizing: border-box;
	overflow: hidden;
	flex-wrap: wrap;
	margin: 15% auto;
`;

const StyledLink = styled(Link)`
	height: 80px;
	width: 200px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	border: 1px solid rgba(255, 0, 0, 0.5);
	text-decoration: none;
	color: #282d30;
	font-size: 32px;
	font-weight: 500;
	background-color: rgba(0, 0, 0, 0.1);
	box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);

	&:hover {
		box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);
	}
`;

export default UserSelect;
