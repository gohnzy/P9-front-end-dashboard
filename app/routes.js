const express = require('express');
const idx = require('idx');

const { USER_MAIN_DATA } = require('./data');

const {
	normalizeUserData,
	normalizeActivitiesData,
	normalizeSessionsData,
	normalizePerformanceData,
} = require('./normalize');
const router = express.Router();

const {
	getUserById,
	getUserActivityById,
	getUserAverageSession,
	getUserPerformance,
} = require('./models');

const { handleNoUserData } = require('./middleware');

router.get('/', (req, res) => {
	console.log(req); // Cela va afficher tous les détails de la requête dans la console
	const allUsers = USER_MAIN_DATA;

	return handleNoUserData(res, allUsers);
});

router.get('/user/:id', (req, res) => {
	const userId = idx(req, _ => _.params.id);
	const userData = getUserById(Number(userId));
	// Normalize user data
	const normalizedUserData = normalizeUserData(userData);

	return handleNoUserData(res, normalizedUserData);
});

router.get('/user/:id/activity', (req, res) => {
	const userId = idx(req, _ => _.params.id);
	const activitiesData = getUserActivityById(Number(userId));
	// Normalize activities data
	const normalizedActivitiesData = normalizeActivitiesData(activitiesData);

	return handleNoUserData(res, normalizedActivitiesData);
});

router.get('/user/:id/average-sessions', (req, res) => {
	const userId = idx(req, _ => _.params.id);
	const sessionsData = getUserAverageSession(Number(userId));
	// Normalize sessions data
	const normalizedSessionsData = normalizeSessionsData(sessionsData);

	return handleNoUserData(res, normalizedSessionsData);
});

router.get('/user/:id/performance', (req, res) => {
	const userId = idx(req, _ => _.params.id);
	const performanceData = getUserPerformance(Number(userId));
	// Normalize performance data
	const normalizedPerformanceData = normalizePerformanceData(performanceData);

	return handleNoUserData(res, normalizedPerformanceData);
});

module.exports = router;
