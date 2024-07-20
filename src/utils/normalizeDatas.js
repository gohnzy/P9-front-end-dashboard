import {
	USER_MAIN_DATA,
	USER_ACTIVITY,
	USER_PERFORMANCE,
	USER_AVERAGE_SESSIONS,
} from '../utils/mockedDatas';

function normalizeUserData(users) {
	return users.map(user => ({
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
	}));
}

function normalizeActivitiesData(activities) {
	return activities.map(activity => ({
		user: activity.userId,
		sessions: activity.sessions.map(session => ({
			day: session.day,
			kilogram: session.kilogram,
			calories: session.calories,
		})),
	}));
}

function normalizeSessionsData(sessions) {
	return sessions.map(session => ({
		user: session.userId,
		sessions: session.sessions.map(s => ({
			day: s.day,
			sessionLength: s.sessionLength,
		})),
	}));
}

function normalizePerformanceData(performances) {
	return performances.map(performance => ({
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
	}));
}

const mainDatas = normalizeUserData(USER_MAIN_DATA);
const activitiesDatas = normalizeActivitiesData(USER_ACTIVITY);
const sessionsDatas = normalizeSessionsData(USER_AVERAGE_SESSIONS);
const performanceDatas = normalizePerformanceData(USER_PERFORMANCE);

export { mainDatas, activitiesDatas, sessionsDatas, performanceDatas };
