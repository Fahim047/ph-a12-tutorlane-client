import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import AllClasses from '../pages/AllClasses';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
	{
		errorElement: <ErrorPage />,
		element: <MainLayout />,
		children: [
			{
				path: '/',
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
]);

export default router;
