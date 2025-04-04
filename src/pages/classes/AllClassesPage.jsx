import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../api/axios';
import LoadingComponent from '../../components/shared/LoadingComponent';
import { useTheme } from '../../hooks';
import ErrorPage from '../ErrorPage';
import ClassCard from './ClassCard';
const AllClassesPage = () => {
	const { darkMode } = useTheme();
	const {
		data: classes,
		isPending,
		isError,
	} = useQuery({
		queryKey: ['classes'],
		queryFn: async () => {
			const response = await axiosPublic.get('/classes');
			return response.data;
		},
	});
	if (isPending) {
		return <LoadingComponent />;
	}
	if (isError) {
		return <ErrorPage />;
	}
	if (classes.length === 0) {
		return (
			<div
				className={`min-h-screen flex justify-center items-center mt-12 py-12 ${
					darkMode ? 'dark' : ''
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-bold text-darkText dark:text-white text-center mb-8">
						No Classes Found!!!
					</h1>
				</div>
			</div>
		);
	}
	return (
		<div className="min-h-screen mt-12 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-darkText dark:text-white text-center mb-8">
					{`All Classes (${classes.length})`}
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{classes.map((classItem) => (
						<ClassCard key={classItem.id} classData={classItem} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AllClassesPage;
