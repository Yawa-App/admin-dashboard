import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const renderLoginOrRedirect = (isUserLoggedIn, component) =>
    isUserLoggedIn ? (
        <Navigate to='/home' replace />
    ) : (
        <Suspense fallback={<div>Loading...</div>}>
            {component}
        </Suspense>
    );

export default renderLoginOrRedirect;
