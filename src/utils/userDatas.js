import GET from '../API_Requests/API_Requests';

/**
 * @param {Number} id - id sent through 'fetchAllUserDatas' function and passed in class's methods
 * @returns {Promise<Object>} all methods of 'ThisUser' class returns an object containing user's datas
 */

// Class used
class ThisUser {
	constructor() {
		this.userData = null;
		this.userActivities = null;
		this.userSessions = null;
		this.userPerformance = null;
	}

	// Ajout d'une méthode asynchrone distincte pour l'initialisation
	initialize = async id => {
		this.userData = await this.fetchUserDatas(id);
		this.userActivities = await this.fetchActivitiesDatas(id);
		this.userSessions = await this.fetchSessionsDatas(id);
		this.userPerformance = await this.fetchPerformanceDatas(id);
	};

	fetchUserDatas = async id => {
		try {
			const basicInfos = await GET(id, 'basicInfos');
			return basicInfos;
		} catch (error) {
			console.error('Error fetching user info:', error);
			return null;
		}
	};

	fetchActivitiesDatas = async id => {
		try {
			const activities = await GET(id, 'activities');
			return activities;
		} catch (error) {
			console.error('Error fetching user activities:', error);
			return null;
		}
	};

	fetchSessionsDatas = async id => {
		try {
			const sessions = await GET(id, 'sessions');
			return sessions;
		} catch (error) {
			console.error('Error fetching user sessions:', error);
			return null;
		}
	};

	fetchPerformanceDatas = async id => {
		try {
			const performance = await GET(id, 'performance');
			return performance;
		} catch (error) {
			console.error('Error fetching user performance:', error);
			return null;
		}
	};
}

// New class intialized and exported
/**
 *
 * @param {Number} id - sent through function's call
 * @returns {Promise<Object>} datas - user's datas
 */
const fetchAllUserDatas = async id => {
	let datas;
	try {
		const userDatas = new ThisUser();
		await userDatas.initialize(id);
		datas = {
			user: userDatas.userData,
			activities: userDatas.userActivities,
			sessions: userDatas.userSessions,
			performance: userDatas.userPerformance,
		};
	} catch (error) {
		return (datas = 'error');
	}
	console.log(datas);
	return datas;
};

export default fetchAllUserDatas;
