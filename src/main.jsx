import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import ThemeProvider from './providers/ThemeProvider.jsx';
import router from './routes/routes.jsx';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={router}></RouterProvider>
		</ThemeProvider>
	</StrictMode>
);
