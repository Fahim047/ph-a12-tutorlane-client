import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios, useUserDetails } from '../../../hooks';
const MyEnrolledClasses = () => {
	const { userDetails } = useUserDetails();
	const { axiosSecure } = useAxios();
	const navigate = useNavigate();
	const {
		data: classes,
		isPending,
		isError,
	} = useQuery({
		queryKey: ['ernrolledClasses', userDetails?._id],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/student/enrollments?userId=${userDetails?._id}`
			);
			return response.data;
		},
	});

	if (isPending) {
		return <LoadingComponent />;
	}
	if (isError) {
		return (
			<p className="text-center mt-8 text-red-500">
				Failed to load enrolled classes. Please try again later.
			</p>
		);
	}
	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">My Enrolled Classes</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{classes.map((classItem) => (
					<div
						key={classItem._id}
						className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800"
					>
						<img
							src={classItem.thumbnail}
							alt={classItem.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-4">
							<h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
								{classItem.title}
							</h2>
							<p className="text-gray-600 dark:text-gray-400">
								By: {classItem.teacherName}
							</p>
							<button
								className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
								onClick={() => navigate(`${classItem.id}`)}
							>
								Continue
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyEnrolledClasses;
