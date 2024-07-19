import { Rectangle } from 'recharts';

const CustomCursor = props => {
	const { points, width } = props;
	const { x, y } = points[0];
	console.log(props);
	return (
		<Rectangle
			fill="rgba(0,0,0,0.1)"
			stroke="red"
			x={x + 5}
			y={y}
			width={width}
			height={1000}
		/>
	);
};

export default CustomCursor;
