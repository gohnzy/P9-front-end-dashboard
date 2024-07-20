import {
	RadialBarChart,
	RadialBar,
	ResponsiveContainer,
	PolarAngleAxis,
} from 'recharts';

const ScoreGraph = ({ datas }) => {
	const score = [{ todayScore: datas.todayScore * 100 }];

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
	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadialBarChart
				cx="50%"
				cy="50%"
				innerRadius="80%"
				outerRadius="100%"
				barSize={10}
				data={score}
				startAngle={90}
				endAngle={450}
			>
				<PolarAngleAxis
					type="number"
					domain={[0, 100]}
					angleAxisId={0}
					tick={false}
				/>

				<RadialBar
					background
					dataKey="todayScore"
					cornerRadius={10}
					fill="#ff0000"
					label={renderCustomLabel}
				></RadialBar>
			</RadialBarChart>
		</ResponsiveContainer>
	);
};

export default ScoreGraph;
