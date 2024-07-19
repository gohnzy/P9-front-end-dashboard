const GetAllUsers = async () => {
	let API = 'http://localhost:3001/';

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

export default GetAllUsers;
