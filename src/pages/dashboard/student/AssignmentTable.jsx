import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useAxios } from '../../../hooks';
import { formatInGlobalDate } from '../../../utils/date-utils';

const AssignmentTable = ({ classId, handleSubmitAssignment }) => {
	const [assignmentUrls, setAssignmentUrls] = useState({});
	const { axiosSecure } = useAxios();
	const {
		data: assignments,
		isPending,
		isError,
	} = useQuery({
		queryKey: ['assignments', classId],
		queryFn: async () => {
			const response = await axiosSecure.get(`/classes/${classId}/assignments`);
			return response.data;
		},
	});

	const handleInputChange = (id, value) => {
		setAssignmentUrls((prevUrls) => ({ ...prevUrls, [id]: value }));
	};

	if (isPending) {
		return <Loader2 className="animate-spin" />;
	}
	if (isError) {
		return <div>Error fetching assignments...</div>;
	}

	return (
		<div className="overflow-auto border border-gray-300 dark:border-gray-600 max-w-screen-sm lg:max-w-screen-md">
			<table className="table-auto text-sm">
				<thead>
					<tr className="bg-gray-200 dark:bg-gray-700">
						<th
							className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left"
							style={{ width: '200px' }}
						>
							Title
						</th>
						<th
							className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left"
							style={{ width: '300px' }}
						>
							Description
						</th>
						<th
							className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left"
							style={{ width: '150px' }}
						>
							Deadline
						</th>
						<th
							className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left"
							style={{ width: '250px' }}
						>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{assignments.map((assignment) => (
						<tr key={assignment.id}>
							<td
								className="border border-gray-300 dark:border-gray-600 px-4 py-2 truncate"
								style={{ maxWidth: '200px' }}
							>
								{assignment.title}
							</td>
							<td
								className="border border-gray-300 dark:border-gray-600 px-4 py-2 truncate"
								style={{ maxWidth: '300px' }}
							>
								{assignment.description}
							</td>
							<td
								className="border border-gray-300 dark:border-gray-600 px-4 py-2"
								style={{ maxWidth: '150px' }}
							>
								{formatInGlobalDate(assignment.deadline)}
							</td>
							<td
								className="border border-gray-300 dark:border-gray-600 px-4 py-2"
								style={{ maxWidth: '350px' }}
							>
								<input
									type="url"
									name={`assignmentUrl-${assignment.id}`}
									value={assignmentUrls[assignment.id] || ''}
									onChange={(e) =>
										handleInputChange(assignment.id, e.target.value)
									}
									placeholder="Enter file link"
									className="block mb-2 py-2 px-3 bg-transparent border rounded-sm"
								/>
								<button
									className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
									onClick={() =>
										handleSubmitAssignment(
											assignment.id,
											assignmentUrls[assignment.id]
										)
									}
									disabled={!assignmentUrls[assignment.id]}
								>
									Submit
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AssignmentTable;
