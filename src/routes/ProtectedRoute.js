import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRouter } from './hooks';

const ProtectedRoute = () => {
	const token = localStorage.getItem('accessToken');
	const router = useRouter(); // If router is not used, consider removing this line.
	if (!token) {
		// Redirect logic here
	}
	return <Outlet />;
};

export default ProtectedRoute;
