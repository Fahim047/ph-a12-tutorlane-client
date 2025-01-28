import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/Dashboard';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import AllClassesPage from '../pages/classes/AllClassesPage';
import AdminAllClasses from '../pages/dashboard/admin/AdminAllClasses';
import AdminProfile from '../pages/dashboard/admin/AdminProfile';
import TeacherRequests from '../pages/dashboard/admin/TeacherRequests';
import Users from '../pages/dashboard/admin/Users';
import EnrollClassDetails from '../pages/dashboard/student/EnrollClassDetails';
import MyEnrollClasses from '../pages/dashboard/student/MyEnrollClasses';
import StudentProfile from '../pages/dashboard/student/StudentProfile';
import AddClass from '../pages/dashboard/teacher/AddClass';
import ClassDetails from '../pages/dashboard/teacher/ClassDetails';
import MyClasses from '../pages/dashboard/teacher/My-Classes/MyClasses';
import TeacherProfile from '../pages/dashboard/teacher/TeacherProfile';
import ClassDetailsPage from '../pages/details/ClassDetailsPage';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import TeachPage from '../pages/TeachPage';
import PrivateRoutes from '../routes/PrivateRoutes';
import AdminRoutes from './AdminRoutes';
import StudentRoutes from './StudentRoutes';
import TeacherRoutes from './TeacherRoutes';
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
				element: <AllClassesPage />,
			},
			{
				path: '/classes/:id',
				element: <ClassDetailsPage />,
			},
			{
				path: '/teach',
				element: (
					<PrivateRoutes>
						<TeachPage />,
					</PrivateRoutes>
				),
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
		element: (
			<PrivateRoutes>
				<DashboardLayout />
			</PrivateRoutes>
		),
		errorElement: (
			<div className="flex flex-col items-center justify-center">
				<p className="text-red-500 text-[10rem]">500</p>
				<p>Something went wrong</p>
			</div>
		),
		children: [
			// Student Routes
			{
				path: 'student',
				children: [
					{
						path: 'my-enroll-classes',
						element: (
							<StudentRoutes>
								<MyEnrollClasses />,
							</StudentRoutes>
						),
					},
					{
						path: 'my-enroll-classes/:id',
						element: (
							<StudentRoutes>
								<EnrollClassDetails />,
							</StudentRoutes>
						),
					},
					{
						index: true,
						element: (
							<StudentRoutes>
								<StudentProfile />,
							</StudentRoutes>
						),
					},
					{
						path: 'profile',
						element: (
							<StudentRoutes>
								<StudentProfile />,
							</StudentRoutes>
						),
					},
				],
			},

			// Admin Routes
			{
				path: 'admin',
				children: [
					{
						path: 'teacher-requests',
						element: (
							<AdminRoutes>
								<TeacherRequests />,
							</AdminRoutes>
						),
					},
					{
						path: 'users',
						element: (
							<AdminRoutes>
								<Users />,
							</AdminRoutes>
						),
					},
					{
						path: 'all-classes',
						element: (
							<AdminRoutes>
								<AdminAllClasses />
							</AdminRoutes>
						),
					},
					{
						index: true,
						element: (
							<AdminRoutes>
								<AdminProfile />,
							</AdminRoutes>
						),
					},
					{
						path: 'profile',
						index: true,
						element: (
							<AdminRoutes>
								<AdminProfile />,
							</AdminRoutes>
						),
					},
				],
			},

			// Teacher Routes
			{
				path: 'teacher',
				children: [
					{
						path: 'add-class',
						element: (
							<TeacherRoutes>
								<AddClass />,
							</TeacherRoutes>
						),
					},
					{
						path: 'my-classes',
						element: (
							<TeacherRoutes>
								<MyClasses />
							</TeacherRoutes>
						),
					},
					{
						path: 'my-classes/:id',
						element: (
							<TeacherRoutes>
								<ClassDetails />,
							</TeacherRoutes>
						),
					},
					{
						index: true,
						element: (
							<TeacherRoutes>
								<TeacherProfile />,
							</TeacherRoutes>
						),
					},
					{
						path: 'profile',
						element: (
							<TeacherRoutes>
								<TeacherProfile />,
							</TeacherRoutes>
						),
					},
				],
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
