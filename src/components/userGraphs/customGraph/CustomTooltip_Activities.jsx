import styled from 'styled-components';

/**
 *
 * @param {Object} props - given by recharts
 * @param {Array} props.payload - points datas on the line given by recharts
 * @param {Object} props.active - tooltip state given by recharts
 * @returns
 */

// Custom tooltip for activities graph
const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<CustomizedTooltip>
				<p className="kilogram">{`Kilogram: ${payload[0].value}`}</p>
				<p className="calories">{`Calories: ${payload[1].value}`}</p>
			</CustomizedTooltip>
		);
	}

	return null;
};

// styles
const CustomizedTooltip = styled.div`
	width: 60px;
	height: 95px;
	font-family: roboto;
	font-size: 12px;
	border-radius: 1px;
	padding: 5px;
	box-sizing: border-box;
	color: white;
	background-color: #e60000;
`;

export default CustomTooltip;
