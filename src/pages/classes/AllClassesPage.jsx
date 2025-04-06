import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../api/axios';
import LoadingComponent from '../../components/shared/LoadingComponent';
import ErrorPage from '../ErrorPage';
import ClassCard from './ClassCard';

const AllClassesPage = () => {
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

	if (isPending) return <LoadingComponent />;
	if (isError) return <ErrorPage />;

	if (!classes || classes.length === 0) {
		return (
			<div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
				<h1 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-white">
					No Classes Found
				</h1>
				<p className="mt-2 text-gray-500 dark:text-gray-400">
					Check back later or contact support for more info.
				</p>
			</div>
		);
	}

	return (
		<div className="mt-12 px-6 py-16 max-w-7xl mx-auto">
			{/* Page Heading */}
			<div className="text-center mb-12">
				<h1 className="text-4xl font-extrabold text-primary">
					Explore All Classes
				</h1>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					Currently showing{' '}
					<span className="font-semibold">{classes.length}</span> available
					classes
				</p>
			</div>

			{/* Classes Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{classes.map((classItem) => (
					<ClassCard key={classItem.id} classData={classItem} />
				))}
			</div>
		</div>
	);
};

export default AllClassesPage;
