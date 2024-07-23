/**
 * @param {Object} props - given by recharts
 * @param {Array} props.payload - points datas on the line given by recharts
 * @param {Object} props.coordinate - mouse coordinate given by recharts
 * @param {Object} props.active - tooltip state given by recharts
 * @returns {JSX.Element}
 */

// Custom tooltip for sessions's graph
const CustomTooltip = ({ active, payload, coordinate }) => {
	if (active && payload && payload.length) {
		const { x } = coordinate;
		const isLastPoint = payload[0].payload.day === 'D';

		return (
			<div
				className="custom-tooltip"
				style={{
					backgroundColor: 'white',
					color: 'black',
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'center',
					width: '50px',
					textAlign: 'center',
					fontSize: '8',
					fontWeight: '600',
					height: '25px',
					position: 'absolute',
					top: '80px',
					left: isLastPoint ? x - 50 : x,
				}}
			>
				<p
					className="label"
					style={{ width: '50px' }}
				>{`${payload[0].value}min`}</p>
			</div>
		);
	}

	return null;
};

export default CustomTooltip;
