import { Outlet } from 'react-router-dom';
import Sidebar from '../components/shared/Sidebar';
import { useAuth } from '../hooks';

const DashboardLayout = () => {
	const { user } = useAuth();

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
	const links = sidebarLinks[user?.role] || [];

	return (
		<div className="flex min-h-screen bg-gray-100">
			{/* Sidebar */}
			<Sidebar links={links} />

			{/* Main Content */}
			<div className="flex-1 p-6">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
