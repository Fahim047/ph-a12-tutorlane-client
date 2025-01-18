import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import { useTheme } from '../hooks';

const MainLayout = () => {
	const { darkMode } = useTheme();
	return (
		<div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default MainLayout;
