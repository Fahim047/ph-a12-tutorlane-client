import { useQuery } from '@tanstack/react-query';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios } from '../../../hooks';

const handleApprove = (id) => {
	console.log('Approve class:', id);
	// Add API call to update class status
};

const handleReject = (id) => {
	console.log('Reject class:', id);
	// Add API call to update class status
};

const handleViewProgress = (id) => {
	console.log('View Progress for class:', id);
	// Add navigation or modal to view progress details
};
const AllClassesPage = () => {
	const { axiosSecure } = useAxios();
	const { data: classes, isPending } = useQuery({
		queryKey: ['adminClasses'],
		queryFn: async () => {
			const response = await axiosSecure.get('/admin/classes');
			return response.data;
		},
	});
	if (isPending) {
		return <LoadingComponent />;
	}
	return (
		<div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				Manage Classes
			</h1>

			{/* Classes Table */}
			<div className="overflow-auto">
				<table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
					<thead className="bg-gray-100 dark:bg-gray-800">
						<tr>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Title
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Image
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Email
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Description
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Actions
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Progress
							</th>
						</tr>
					</thead>
					<tbody>
						{classes.map((cls) => (
							<tr
								key={cls._id}
								className="hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								{/* Title */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									{cls.title}
								</td>

								{/* Image */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									<img
										src={cls.thumbnail}
										alt={cls.title}
										className="w-20 h-20 object-cover rounded-md"
									/>
								</td>

								{/* Email */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									{cls.teacherEmail}
								</td>

								{/* Description */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									{cls.description.length > 50
										? `${cls.description.substring(0, 50)}...`
										: cls.description}
								</td>

								{/* Actions */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2 space-y-2">
									<button
										onClick={() => handleApprove(cls._id)}
										disabled={
											cls.status === 'approved' || cls.status === 'rejected'
										}
										className={`w-full px-4 py-2 rounded-lg font-medium ${
											cls.status === 'approved' || cls.status === 'rejected'
												? 'bg-gray-400 text-gray-600 cursor-not-allowed'
												: 'bg-green-500 text-white hover:bg-green-600'
										}`}
									>
										Approve
									</button>
									<button
										onClick={() => handleReject(cls._id)}
										disabled={
											cls.status === 'approved' || cls.status === 'rejected'
										}
										className={`w-full px-4 py-2 rounded-lg font-medium ${
											cls.status === 'approved' || cls.status === 'rejected'
												? 'bg-gray-400 text-gray-600 cursor-not-allowed'
												: 'bg-red-500 text-white hover:bg-red-600'
										}`}
									>
										Reject
									</button>
								</td>

								{/* Progress */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									<button
										onClick={() => handleViewProgress(cls._id)}
										disabled={cls.status !== 'approved'}
										className={`w-full px-4 py-2 rounded-lg font-medium ${
											cls.status === 'approved'
												? 'bg-blue-500 text-white hover:bg-blue-600'
												: 'bg-gray-400 text-gray-600 cursor-not-allowed'
										}`}
									>
										View Progress
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllClassesPage;
