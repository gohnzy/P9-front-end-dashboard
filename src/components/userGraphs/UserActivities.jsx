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

const CustomTooltip = ({ active, payload, label }) => {
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

const ActivitiesGraph = ({ datas }) => {
	// Transformer les données pour les calories en utilisant le facteur de réduction
	const transformedData = datas.map((data, index) => ({
		...data,
		index: index + 1,
		scaledCalories: data.calories * 0.1,
		scaledKilogram: data.kilogram * 0.5,
	}));

	const getMinMaxValues = () => {
		const calories = datas.map(d => d.calories);
		const minCal = Math.min(...calories);
		const maxCal = Math.max(...calories);
		const kilograms = datas.map(d => d.kilogram);
		const minKil = Math.min(...kilograms);
		const maxKil = Math.max(...kilograms);
		return { minCal, maxCal, minKil, maxKil };
	};

	const { minCal, maxCal, minKil, maxKil } = getMinMaxValues();

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
					domain={[minKil - 3, maxKil + 3]}
					interval={1}
					axisLine={false}
					tickLine={false}
				/>
				<YAxis
					yAxisId="right"
					orientation="right"
					domain={[minCal - 20, maxCal + 20]}
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

const StyledBarChart = styled(BarChart)`
	margin-top: 10px;
`;

export default ActivitiesGraph;
