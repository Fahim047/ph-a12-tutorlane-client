import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { getTeacherRequests } from '../../../utils/queries';

const handleApprove = (id) => console.log(`Approved request with ID: ${id}`);
const handleReject = (id) => console.log(`Rejected request with ID: ${id}`);

const TeacherRequestPage = () => {
	const {
		data: requests,
		isPending,
		error,
	} = useQuery({
		queryFn: getTeacherRequests,
		queryKey: ['teacherRequests'],
	});
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
								key={request.id}
								className="hover:bg-gray-50 dark:hover:bg-gray-800"
							>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									<img
										src={request.user?.photoURL}
										alt={request.user?.name}
										className="w-12 h-12 rounded-full"
									/>
								</td>
								<td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
									{request.user?.name}
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
											onClick={() => handleApprove(request.id)}
											className="px-4 py-1 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600 disabled:bg-gray-400"
											disabled={request.status !== 'pending'}
										>
											Approve
										</button>
										<button
											onClick={() => handleReject(request.id)}
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

TeacherRequestPage.propTypes = {
	requests: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			experience: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			status: PropTypes.oneOf(['pending', 'accepted', 'rejected']).isRequired,
		})
	).isRequired,
	handleApprove: PropTypes.func.isRequired,
	handleReject: PropTypes.func.isRequired,
};

export default TeacherRequestPage;
