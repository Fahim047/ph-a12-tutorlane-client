import { Outlet } from 'react-router-dom';
import LoadingComponent from '../components/shared/LoadingComponent';
import Sidebar from '../components/shared/Sidebar';
import ThemeSwitcher from '../components/shared/ThemeSwitcher';
import { useAuth, useTheme, useUserRole } from '../hooks';

const DashboardLayout = () => {
	const { user } = useAuth();
	const { role, isLoading, error } = useUserRole();
	const { darkMode, setDarkMode } = useTheme();

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

	const links = role ? sidebarLinks[role] : [];

	if (isLoading) {
		return <LoadingComponent />;
	}

	if (error) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<p className="text-red-500">
					Error: {error.message || 'Something went wrong!'}
				</p>
			</div>
		);
	}

	return (
		<div className={`flex min-h-screen ${darkMode ? 'dark' : ''}`}>
			{/* Sidebar */}
			<Sidebar links={links} />

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Top Bar */}
				<header className="flex items-center justify-between p-4 shadow bg-white dark:bg-gray-800">
					<h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
						Welcome, {user?.displayName || 'User'}!
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
