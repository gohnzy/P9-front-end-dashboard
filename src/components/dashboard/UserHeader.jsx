import styled from 'styled-components';

const userHeader = ({ user }) => {
	let datas = user;
	return (
		<Banner>
			<H1>Bonjour</H1>
			<Name>{datas.firstName || 'Utilisateur'}</Name>{' '}
			{/* Affichez le nom de l'utilisateur si disponible */}
			<H3>Félicitation ! Vous avez explosé vos objectifs hier 👏</H3>
		</Banner>
	);
};

const Banner = styled.section`
	& * {
		font-family: Roboto;
	}
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	width: 30vw;
`;

const H1 = styled.h1`
	font-size: 48px;
	font-weight: 500;
	margin: 0;
	width: fit-content;
`;

const Name = styled.h2`
	font-size: 48px;
	font-weight: 500;
	width: fit-content;
	margin: 0;
	color: #e60000;
`;

const H3 = styled.h3`
	font-size: 18px;
	font-weight: 400;
	margin: 0;
`;

export default userHeader;
