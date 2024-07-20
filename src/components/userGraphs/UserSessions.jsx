import React, { useState } from 'react';
import {
	LineChart,
	YAxis,
	XAxis,
	Tooltip,
	Line,
	ResponsiveContainer,
	Defs,
	LinearGradient,
	Stop,
} from 'recharts';

import CustomTooltip from './customGraph/CustomTooltip_Sessions';
import CustomCursor from './customGraph/CustomCursor_Sesssions';

const UserSessionsGraph = ({ datas }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const sessions = datas.sessions;
	const extendedDays = {
		0: 'J-1',
		1: 'L',
		2: 'M',
		3: 'M',
		4: 'J',
		5: 'V',
		6: 'S',
		7: 'D',
		8: 'J+1',
	};

	const firstDayValue = sessions[0].sessionLength;
	const lastDayValue = sessions[sessions.length - 1].sessionLength;

	// Ajouter deux jours supplémentaires au début et à la fin
	const data = [
		{ day: 0, sessionLength: firstDayValue },
		...datas.sessions.map(session => ({
			...session,
			day: session.day, // Décalage pour tenir compte du jour supplémentaire au début
		})),
		{ day: 8, sessionLength: lastDayValue }, // Jour supplémentaire à la fin
	].map(item => ({
		...item,
		day: extendedDays[item.day] || 'Unknown', // Assurez-vous que chaque jour a un label
	}));

	const getMinMaxSessionLength = () => {
		const sessionLengths = data.map(session => session.sessionLength);
		const min = Math.min(...sessionLengths);
		const max = Math.max(...sessionLengths);
		return { min, max };
	};

	const { min, max } = getMinMaxSessionLength();

	return (
		<ResponsiveContainer width="106.5%" height="100%">
			<LineChart
				data={data}
				margin={{ top: 100, left: -65, right: 9, bottom: 0 }}
				onMouseMove={state => {
					if (state.isTooltipActive) {
						setActiveIndex(state.activeTooltipIndex);
					} else {
						setActiveIndex(null);
					}
				}}
			>
				<defs>
					<linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stopColor="#b1b1b1" />
						<stop offset="25%" stopColor="#bebebe" />
						<stop offset="50%" stopColor="#dbdbdb" />
						<stop offset="75%" stopColor="#e6e6e6" />
						<stop offset="100%" stopColor="#ffffff" />
					</linearGradient>
				</defs>
				<XAxis
					dataKey="day"
					tick={{
						textAnchor: 'middle',
						fill: 'rgba(255,255,255,0.7)',
						fontSize: '12',
					}}
					tickSize={-10}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis tick={false} axisLine={false} domain={[min - 15, max + 15]} />
				<Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
				<Line
					type="bump"
					dataKey="sessionLength"
					stroke="url(#lineGradient)"
					strokeWidth={3}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default UserSessionsGraph;
