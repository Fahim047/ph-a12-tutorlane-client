import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';

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
				path: '/about',
				element: <About />,
			},
		],
	},
]);

export default router;
