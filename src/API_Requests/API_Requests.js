const GET = async (id, type) => {
	let API;
	if (type === 'basicInfos') {
		API = `http://localhost:3001/user/${id}`;
	} else if (type === 'activities') {
		API = `http://localhost:3001/user/${id}/activity`;
	} else if (type === 'sessions') {
		API = `http://localhost:3001/user/${id}/average-sessions`;
	} else if (type === 'performance') {
		API = `http://localhost:3001/user/${id}/performance`;
	}

	const fetchData = async () => {
		let datas;
		try {
			const response = await fetch(API);
			if (!response.ok) {
				throw new Error('NOT FOUND');
			}
			const data = await response.json();
			datas = data;
		} catch (error) {
			console.error(error);
			throw error;
		}
		return datas;
	};

	return await fetchData();
};

export default GET;
