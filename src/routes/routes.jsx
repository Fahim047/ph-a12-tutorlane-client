import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/Dashboard';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import AllClasses from '../pages/AllClasses';
import AdminAllClasses from '../pages/dashboard/admin/AdminAllClasses';
import AdminProfile from '../pages/dashboard/admin/AdminProfile';
import TeacherRequests from '../pages/dashboard/admin/TeacherRequests';
import Users from '../pages/dashboard/admin/Users';
import EnrollClassDetails from '../pages/dashboard/student/EnrollClassDetails';
import MyEnrollClasses from '../pages/dashboard/student/MyEnrollClasses';
import StudentProfile from '../pages/dashboard/student/StudentProfile';
import AddClass from '../pages/dashboard/teacher/AddClass';
import ClassDetails from '../pages/dashboard/teacher/ClassDetails';
import MyClasses from '../pages/dashboard/teacher/MyClasses';
import TeacherProfile from '../pages/dashboard/teacher/TeacherProfile';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import TeachPage from '../pages/TeachPage';
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
			{
				path: '/classes',
				element: <AllClasses />,
			},
			{
				path: '/teach',
				element: <TeachPage />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/signup',
		element: <RegisterPage />,
	},
	{
		path: '/dashboard',
		element: <DashboardLayout />,
		errorElement: (
			<div className="flex flex-col items-center justify-center">
				<p className="text-red-500 text-[10rem]">500</p>
				<p>Something went wrong</p>
			</div>
		),
		children: [
			// Student Routes
			{
				path: 'student/my-enroll-classes',
				element: <MyEnrollClasses />,
			},
			{
				path: 'student/my-enroll-classes/:id',
				element: <EnrollClassDetails />,
			},
			{
				path: 'student/profile',
				element: <StudentProfile />,
			},

			// Admin Routes
			{
				path: 'admin/teacher-requests',
				element: <TeacherRequests />,
			},
			{
				path: 'admin/users',
				element: <Users />,
			},
			{
				path: 'admin/all-classes',
				element: <AdminAllClasses />,
			},
			{
				path: 'admin/profile',
				element: <AdminProfile />,
			},

			// Teacher Routes
			{
				path: 'teacher/add-class',
				element: <AddClass />,
			},
			{
				path: 'teacher/my-classes',
				element: <MyClasses />,
			},
			{
				path: 'teacher/my-classes/:id',
				element: <ClassDetails />,
			},
			{
				path: 'teacher/profile',
				element: <TeacherProfile />,
			},
			{
				path: '*',
				element: (
					<div className="flex flex-col items-center justify-center">
						<p className="text-red-500 text-[10rem]">404</p>
						<p>Not Found</p>
					</div>
				),
			},
		],
	},
]);

export default router;
