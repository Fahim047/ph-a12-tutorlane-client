import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAxios } from '../../../hooks';
import { getTeacherRequests } from '../../../utils/queries';

const TeacherRequestPage = () => {
	const { axiosSecure } = useAxios();
	const {
		data: requests,
		isPending,
		error,
	} = useQuery({
		queryFn: getTeacherRequests,
		queryKey: ['teacherRequests'],
	});
	const handleReject = async (id) => {
		const response = await axiosSecure.patch(
			`/admin/teacher-requests/${id}/reject`
		);
		const { message } = response.data;
		toast.success(message);
	};
	const handleApprove = async (id) => {
		const response = await axiosSecure.patch(
			`/admin/teacher-requests/${id}/accept`
		);
		const { message } = response.data;
		toast.success(message);
	};
	if (isPending) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>Something went wrong...</h1>;
	}
	return (
		<div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				Teacher Requests
			</h1>
			<div className="overflow-x-auto">
				<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
					<thead>
						<tr className="bg-gray-100 dark:bg-gray-700 text-left">
							<th className="px-4 py-2 border border-gray-300 dark:border-gray-700">
								Image
							</th>
							<th className="px-4 py-2 border border-gray-300 dark:border-gray-700">
								Name
							</th>
							<th className="px-4 py-2 border border-gray-300 dark:border-gray-700">
								Experience
							</th>
							<th className="px-4 py-2 border border-gray-300 dark:border-gray-700">
								Title
							</th>
							<th className="px-4 py-2 border border-gray-300 dark:border-gray-700">
								Category
							</th>
							<th className="px-4 py-2 border border-gray-300 dark:border-gray-700">
								Status
							</th>
							<th className="px-4 py-2 border border-gray-300 dark:border-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{requests.map((request) => (
							<tr
								key={request._id}
								className="hover:bg-gray-50 dark:hover:bg-gray-800"
							>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									<img
										src={request.image}
										alt={request.name}
										className="w-12 h-12 rounded-full"
									/>
								</td>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									{request.name}
								</td>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									{request.experience} years
								</td>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									{request.title}
								</td>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									{request.category}
								</td>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									<span
										className={`px-2 py-1 rounded-full text-white ${
											request.status === 'pending'
												? 'bg-yellow-500'
												: request.status === 'accepted'
												? 'bg-green-500'
												: 'bg-red-500'
										}`}
									>
										{request.status}
									</span>
								</td>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									<div className="flex space-x-2">
										<button
											onClick={() => handleApprove(request._id)}
											className="px-4 py-1 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600 disabled:bg-gray-400"
											disabled={request.status !== 'pending'}
										>
											Approve
										</button>
										<button
											onClick={() => handleReject(request._id)}
											className="px-4 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 disabled:bg-gray-400"
											disabled={request.status !== 'pending'}
										>
											Reject
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TeacherRequestPage;
