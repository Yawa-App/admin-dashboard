import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRouter } from './hooks';

const ProtectedRoute = () => {
	const token = localStorage.getItem('accessToken');
	const router = useRouter();
	// const location = useLocation();
	
	if (!token) {
		console.log("not login it");
		// Redirect to login page or show an error message
		// You can use the router here if needed
		return null;
	}

	return <Outlet />;
};

export default ProtectedRoute;