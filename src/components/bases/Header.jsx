import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import name from '../../assets/Name.svg';

const Header = () => {
	return (
		<HeaderDiv>
			<Links>
				<StyledLink name="logo" to="/">
					<img id="name" src={name} alt="" />
					<img id="logo" src={logo} alt="" />
				</StyledLink>
				<StyledLink>Accueil</StyledLink>
				<StyledLink>Profil</StyledLink>
				<StyledLink>Réglage</StyledLink>
				<StyledLink>Communauté</StyledLink>
			</Links>
		</HeaderDiv>
	);
};

const HeaderDiv = styled.header`
	width: 100vw;
	height: 10vh;
	background-color: black;
	position: relative;
`;

const Links = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 0 4vw 0 1.5vw;
	box-sizing: border-box;
`;

const StyledLink = styled(Link)`
	color: white;
	font-size: 24px;
	font-weight: 500;
	text-align: center;
	text-decoration: none;
	font-family: roboto;

	&[name='logo'] {
		height: 57px;
		display: flex;
		align-items: center;
		gap: 8px;

		&#name {
		}

		&#logo {
			height: 100%;
			width: 168px;
		}
	}
`;

export default Header;
