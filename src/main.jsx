import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import AuthProvider from './providers/AuthProvider.jsx';
import ThemeProvider from './providers/ThemeProvider.jsx';
import router from './routes/routes.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider>
			<AuthProvider>
				<RouterProvider router={router}></RouterProvider>
				<ToastContainer position="top-center" autoClose={2500} />
			</AuthProvider>
		</ThemeProvider>
	</StrictMode>
);
