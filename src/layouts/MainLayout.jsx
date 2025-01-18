import Navbar from '../components/shared/Navbar';
import { useTheme } from '../hooks';

const MainLayout = () => {
	const { darkMode } = useTheme();
	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<Navbar />
		</div>
	);
};

export default MainLayout;
