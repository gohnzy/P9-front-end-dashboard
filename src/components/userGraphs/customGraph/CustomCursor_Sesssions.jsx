import { Rectangle } from 'recharts';

/**
 *
 * @param {Object} props - Cursor props given by recharts
 * @param {Array} props.points - Array of points on the line
 * @param {number} props.width - Width of
 * @returns {JSX.Element}
 */

// Custom component for graph's tooltip cursor in Sessions graph
const CustomCursor = props => {
	const { points, width } = props;
	const { x } = points[0];
	return (
		<Rectangle
			fill="rgba(0,0,0,0.1)"
			stroke="red"
			x={x}
			y={0}
			width={width}
			height={10000}
		/>
	);
};

export default CustomCursor;
