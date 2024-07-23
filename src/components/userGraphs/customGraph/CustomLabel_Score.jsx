const renderCustomLabel = ({ cx, cy, value }) => {
	return (
		<text
			x={cx}
			y={cy}
			fill="black"
			textAnchor="middle"
			fontSize="26px"
			fontWeight="700"
		>
			{`${value}%`}
		</text>
	);
};

export default renderCustomLabel;
