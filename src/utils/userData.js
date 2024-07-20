import {
	mainDatas,
	sessionsDatas,
	activitiesDatas,
	performanceDatas,
} from './normalizeDatas';

function getUserDataById(id) {
	const ID = Number(id);
	const userData = mainDatas.find(user => user.id === ID);
	const activityData = activitiesDatas.find(activity => activity.user === ID);
	const sessionData = sessionsDatas.find(session => session.user === ID);
	const performanceData = performanceDatas.find(
		performance => performance.user === ID,
	);
	// console.log(userData, activityData, sessionData, performanceData);

	if (!userData) {
		return null;
	}

	return {
		userData,
		activityData,
		sessionData,
		performanceData,
	};
}

export default getUserDataById;
