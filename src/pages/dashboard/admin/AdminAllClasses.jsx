import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios } from '../../../hooks';

const handleViewProgress = (id) => {
	toast.warning('Not implemented yet');
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
	const handleApprove = async (id) => {
		try {
			const response = await axiosSecure.patch(`/admin/classes/${id}/approve`);
			if (response.status === 200) {
				toast.success(response.data?.message);
			}
		} catch (err) {
			console.log(err);
			toast.error(err?.message);
		}
	};
	const handleReject = async (id) => {
		try {
			const response = await axiosSecure.patch(`/admin/classes/${id}/reject`);
			if (response.status === 200) {
				toast.success(response.data?.message);
			}
		} catch (err) {
			console.log(err);
			toast.error(err?.message);
		}
	};
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
								key={cls.id}
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
										onClick={() => handleApprove(cls.id)}
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
										onClick={() => handleReject(cls.id)}
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
										onClick={() => handleViewProgress(cls.id)}
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
