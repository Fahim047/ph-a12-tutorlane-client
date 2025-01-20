import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import AllClasses from '../pages/AllClasses';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';

const router = createBrowserRouter([
	{
		errorElement: <ErrorPage />,
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				index: true,
				element: <Homepage />,
			},
			{
				path: '/classes',
				element: <AllClasses />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/signup',
		element: <RegisterPage />,
	},
]);

export default router;
