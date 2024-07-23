/////																		/////
//				This function is not required for the project				 //
//		It allows dev user to swap between users - for developpement only	 //
//		 Accessible from base URL '/', which is the default page opened		 //
/////																		/////

// Get all users for API's root URL in order to gather all users and map into them to display swap button on component 'UserSelect'
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
