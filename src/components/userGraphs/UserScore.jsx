import {
	RadialBarChart,
	RadialBar,
	ResponsiveContainer,
	PolarAngleAxis,
} from 'recharts';

import renderCustomLabel from './customGraph/CustomLabel_Score';

/**
 *
 * @param {Object} props - datas sent on component
 * @param {Array} datas - user's datas
 * @param {Number} datas.data.todayScore - user's score
 * @returns {JSX.Element}
 */

// User's daily score graph - radial bar chart
const ScoreGraph = ({ datas }) => {
	// Transforming decimal nomber in percentage
	const score = [{ todayScore: datas.data.todayScore * 100 }];

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
