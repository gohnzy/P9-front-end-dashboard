import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
} from 'react-router-dom';

import './styles/style.css';

import UserSelect from './components/pages/UserSelect';
import UserHomepage from './components/pages/Dashboard';

import Header from './components/bases/Header';
import VerticalLayout from './components/bases/VerticalLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GetUser = () => {
	const { id } = useParams();
	if (!id) return <Error />;
	return <UserHomepage id={id} />;
};

// const GetDatas = () => {
// 	const [datas, setDatas] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const fetchDatas = async () => {
// 			try {
// 				const result = await GetAllUsers();
// 				setDatas(result);
// 			} catch (error) {
// 				setError(error.message);
// 			} finally {
// 				setTimeout(() => {
// 					setLoading(false);
// 				}, 500);
// 			}
// 		};

// 		fetchDatas();
// 	}, []);
// 	if (loading) return <div>Loading...</div>;
// 	if (error) return <div>Error: {error}</div>;
// 	return <UserSelect datas={datas} />;
// };

root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<VerticalLayout />
			<Routes>
				{/* <Route path="/" element={<GetDatas />}></Route> */}
				<Route path="/user/:id" element={<GetUser />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>,
);
