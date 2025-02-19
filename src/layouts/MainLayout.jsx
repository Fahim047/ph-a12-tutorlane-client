import { Loader2 } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/sections/Footer';
import Navbar from '../components/shared/Navbar';
import { useAuth, useTheme } from '../hooks';

const MainLayout = () => {
	const { loading } = useAuth();
	const { darkMode } = useTheme();
	if (loading)
		return (
			<div className="h-screen w-full flex items-center justify-center gap-2 text-3xl">
				<Loader2 size={36} className="animate-spin" />
				<h4>Loading...</h4>
			</div>
		);
	return (
		<div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
