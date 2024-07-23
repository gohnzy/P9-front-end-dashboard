// Changer data call to land here and make the datas to be normalized before getting send through API calls

function normalizeUserData(user) {
	return {
		id: user.id,
		firstName: user.userInfos.firstName,
		lastName: user.userInfos.lastName,
		age: user.userInfos.age,
		todayScore: user.todayScore || user.score,
		keyData: {
			calorieCount: user.keyData.calorieCount,
			proteinCount: user.keyData.proteinCount,
			carbohydrateCount: user.keyData.carbohydrateCount,
			lipidCount: user.keyData.lipidCount,
		},
	};
}

function normalizeActivitiesData(activities) {
	return {
		user: activities.userId,
		sessions: activities.sessions.map(session => ({
			day: session.day,
			kilogram: session.kilogram,
			calories: session.calories,
		})),
	};
}

function normalizeSessionsData(sessions) {
	return {
		user: sessions.userId,
		sessions: sessions.sessions.map(session => ({
			day: session.day,
			sessionLength: session.sessionLength,
		})),
	};
}

function normalizePerformanceData(performance) {
	return {
		user: performance.userId,
		kind: {
			1: 'Cardio',
			2: 'Energie',
			3: 'Endurance',
			4: 'Force',
			5: 'Vitesse',
			6: 'Intensité',
		},
		data: performance.data.map(item => ({
			value: item.value,
			kind: item.kind,
		})),
	};
}

module.exports = {
	normalizeUserData,
	normalizeActivitiesData,
	normalizeSessionsData,
	normalizePerformanceData,
};
