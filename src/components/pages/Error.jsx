import styled from 'styled-components';

const Error = ({ message }) => {
	return <ErrorMsg>{message}</ErrorMsg>;
};

const ErrorMsg = styled.h1`
	margin: 100px auto;
	text-align: center;
	font-family: roboto;
	font-size: 48px;
	font-weight: 700;
	color: #e60000;
`;

export default Error;
