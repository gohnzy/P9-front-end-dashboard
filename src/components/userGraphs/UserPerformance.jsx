import {
	RadarChart,
	PolarGrid,
	Radar,
	ResponsiveContainer,
	PolarAngleAxis,
	PolarRadiusAxis,
} from 'recharts';

const PerformanceGraph = ({ datas }) => {
	const data = datas.data;
	const performance = data.data;

	const values = performance.map(perf => ({
		...perf,
		value: perf.value,
		kind: data.kind[perf.kind],
	}));
	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart
				outerRadius="80%"
				data={values}
				margin={{ left: -30, right: 90, top: 10, bottom: 10 }}
			>
				<PolarGrid fill="#ffffff" radialLines={false} />
				<PolarAngleAxis
					tick={{
						fill: 'white',
						fontSize: 12,
						fontWeight: 'bold',
						textAnchor: 'middle',
					}}
					axisLine={false}
					dataKey="kind"
					tickSize={27}
					tickLine={false}
				/>
				<PolarRadiusAxis
					angle={90}
					domain={[0, 'dataMax']}
					tick={false}
					axisLine={false}
				/>
				<Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	);
};

export default PerformanceGraph;
