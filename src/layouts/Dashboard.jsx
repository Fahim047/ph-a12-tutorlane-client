import { Outlet } from 'react-router-dom';
import Sidebar from '../components/shared/Sidebar';
import ThemeSwitcher from '../components/shared/ThemeSwitcher';
import { useAuth, useTheme } from '../hooks';

const DashboardLayout = () => {
	const { user } = useAuth();
	const { darkMode, setDarkMode } = useTheme();

	// Sidebar links based on user role
	const sidebarLinks = {
		student: [
			{ name: 'My Enrolled Classes', path: 'student/my-enroll-classes' },
			{ name: 'Profile', path: 'student/profile' },
		],
		admin: [
			{ name: 'Teacher Requests', path: 'admin/teacher-requests' },
			{ name: 'Users', path: 'admin/users' },
			{ name: 'All Classes', path: 'admin/all-classes' },
			{ name: 'Profile', path: 'admin/profile' },
		],
		teacher: [
			{ name: 'Add Class', path: 'teacher/add-class' },
			{ name: 'My Classes', path: 'teacher/my-classes' },
			{ name: 'Profile', path: 'teacher/profile' },
		],
	};
	const links = sidebarLinks[user?.role] || sidebarLinks['admin'];

	return (
		<div className={`flex min-h-screen ${darkMode ? 'dark' : ''}`}>
			{/* Sidebar */}
			<Sidebar links={links} />

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Top Bar */}
				<header className="flex items-center justify-between p-4 shadow bg-white dark:bg-gray-800">
					<h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
						Welcome, {user?.name || 'User'}!
					</h1>
					{/* Theme Switcher */}
					<ThemeSwitcher
						darkMode={darkMode}
						toggleTheme={() => setDarkMode((prev) => !prev)}
					/>
				</header>

				{/* Main Content */}
				<main className="flex-1 p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
