import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';

import DashboardLayout from 'src/layouts/dashboard';
import { isAuthorized } from 'src/features/slide/authSlice';
import ProtectedRoute from './ProtectedRoute';

import renderLoginOrRedirect from './routeHelpers';

const IndexPage = lazy(() => import('src/pages/app'));
const UserPage = lazy(() => import('src/pages/user'));
const AgenciesPage = lazy(() => import('src/pages/agencies'));
const LoginPage = lazy(() => import('src/pages/login'));
const StatePage = lazy(() => import('src/pages/state'));
const CirclePage = lazy(() => import('src/pages/circle'));
const ResponderPage = lazy(() => import('src/pages/responder'));
const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const store = useStore();
  console.log('Current Redux State:', store.getState()); // This will log the entire Redux state

  const isUserLoggedIn = useSelector(isAuthorized);
  console.log('Is User Logged In:', isUserLoggedIn);

  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: 'login',
      element: (renderLoginOrRedirect(isUserLoggedIn, <LoginPage />)),
    },
    {
      element: (
        <ProtectedRoute isAuthenticated={isUserLoggedIn}  >
          <DashboardLayout>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </ProtectedRoute>
      ),
      children: [
        { path: 'dashboard', element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'state', element: <StatePage /> },
        { path: 'agency', element: <AgenciesPage /> },
        { path: 'circles', element: <CirclePage /> },
        { path: 'first-responders', element: <ResponderPage /> },
      ],
    },
    {
      path: '404',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Page404 />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
