import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useAxios } from '../../hooks';
import { formatInGlobalDate } from '../../utils/date-utils';

const AssignmentTable = ({ classId }) => {
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
	if (isPending) {
		return <Loader2 className="animate-spin" />;
	}
	if (isError) {
		return (
			<p className="text-center mt-8 text-red-500">
				Failed to load assignments. Please try again later.
			</p>
		);
	}
	return (
		<div className="mt-6">
			<h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
				Class Assignments
			</h2>
			{assignments.length > 0 ? (
				<table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
					<thead>
						<tr>
							<th className="border border-gray-300 px-4 py-2">Serial</th>
							<th className="border border-gray-300 px-4 py-2">Title</th>
							<th className="border border-gray-300 px-4 py-2">Description</th>
							<th className="border border-gray-300 px-4 py-2">Deadline</th>
						</tr>
					</thead>
					<tbody>
						{assignments.map((assignment, index) => (
							<tr key={assignment.id}>
								<td className="border border-gray-300 px-4 py-2">
									{index + 1}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{assignment.title}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{assignment.description}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{formatInGlobalDate(assignment.deadline)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div
					className="h-[100px] flex items-center
				justify-center"
				>
					<p className="text-2xl">You didn&apos;t create any assignments yet</p>
				</div>
			)}
		</div>
	);
};
export default AssignmentTable;
