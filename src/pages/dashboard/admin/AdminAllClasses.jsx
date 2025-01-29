import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios } from '../../../hooks';

const AllClassesPage = () => {
	const navigate = useNavigate();
	const { axiosSecure } = useAxios();
	const queryClient = useQueryClient();

	// Fetching classes
	const { data: classes, isPending } = useQuery({
		queryKey: ['adminClasses'],
		queryFn: async () => {
			const response = await axiosSecure.get('/admin/classes');
			return response.data;
		},
	});

	// Approve Class Mutation
	const { mutate: approveClass } = useMutation({
		mutationFn: async (id) => {
			const response = await axiosSecure.patch(`/admin/classes/${id}/approve`);
			return response.data;
		},
		onSuccess: (data) => {
			toast.success(data?.message || 'Class approved successfully!');
			queryClient.invalidateQueries(['adminClasses']);
		},
		onError: (err) => {
			toast.error(err?.message || 'Failed to approve class.');
		},
	});

	// Reject Class Mutation
	const { mutate: rejectClass } = useMutation({
		mutationFn: async (id) => {
			const response = await axiosSecure.patch(`/admin/classes/${id}/reject`);
			return response.data;
		},
		onSuccess: (data) => {
			toast.success(data?.message || 'Class rejected successfully!');
			queryClient.invalidateQueries(['adminClasses']);
		},
		onError: (err) => {
			toast.error(err?.message || 'Failed to reject class.');
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
										onClick={() => approveClass(cls.id)}
										disabled={cls.status !== 'pending'}
										className={`w-full px-4 py-2 rounded-lg font-medium ${
											cls.status !== 'pending'
												? 'bg-gray-400 text-gray-600 cursor-not-allowed'
												: 'bg-green-500 text-white hover:bg-green-600'
										}`}
									>
										Approve
									</button>
									<button
										onClick={() => rejectClass(cls.id)}
										disabled={cls.status !== 'pending'}
										className={`w-full px-4 py-2 rounded-lg font-medium ${
											cls.status !== 'pending'
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
										onClick={() =>
											navigate(`/dashboard/admin/all-classes/${cls.id}`)
										}
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
