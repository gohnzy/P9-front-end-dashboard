import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

// Import custom tooltip
import CustomTooltip from './customGraph/CustomTooltip_Activities';

/**
 *
 * @param {Array} props.datas - passed by parent to the graph component*
 * @param {} datas.calories - calories burned in kcal
 * @param {} datas.calories - calories burned in kcal
 * @returns
 */

// Activities graph made with recharts,
// displays the last week activity with weight state and calories burned, for each days
const ActivitiesGraph = ({ datas }) => {
	// Transform datas number with scaling factors to adapt bar size and improve the graph's lisibility
	const transformedData = datas.map((data, index) => ({
		...data,
		index: index + 1,
		scaledCalories: data.calories * 0.1,
		scaledKilogram: data.kilogram * 0.5,
	}));

	return (
		<ResponsiveContainer width="100%" height={200}>
			<StyledBarChart
				data={transformedData}
				margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" vertical={false} />
				<XAxis dataKey="index" tickLine={false} />
				<YAxis
					yAxisId="left"
					orientation="left"
					domain={[75, 85]}
					interval={1}
					axisLine={false}
					tickLine={false}
				/>
				<YAxis
					yAxisId="right"
					orientation="right"
					domain={[150, 100 * 0.4]}
					interval={1}
					axisLine={false}
					tickLine={false}
				/>
				<Tooltip
					content={<CustomTooltip />}
					formatter={(value, name, props) => {
						if (name === 'scaledCalories') {
							return [props.payload.calories, 'calories'];
						}
						return [value, name];
					}}
				/>

				<Bar
					dataKey="kilogram"
					fill="#282d30"
					yAxisId="left"
					barSize={10}
					radius={[10, 10, 0, 0]}
				></Bar>
				<Bar
					dataKey="calories"
					fill="#e60000"
					yAxisId="right"
					barSize={10}
					radius={[10, 10, 0, 0]}
				></Bar>
			</StyledBarChart>
		</ResponsiveContainer>
	);
};

// Styles

const StyledBarChart = styled(BarChart)`
	margin-top: 10px;
`;

export default ActivitiesGraph;
