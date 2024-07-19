import { Rectangle } from 'recharts';

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
