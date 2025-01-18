import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';

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
		],
	},
]);

export default router;
