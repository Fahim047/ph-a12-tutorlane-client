const MyEnrollClassDetails = () => {
	const assignments = [
		{
			id: 1,
			title: 'Assignment 1',
			description: 'Solve the following math problems.',
			deadline: '2025-01-31',
		},
		{
			id: 2,
			title: 'Assignment 2',
			description: 'Write a short essay on climate change.',
			deadline: '2025-02-15',
		},
	];

	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">Class Details</h1>

			{/* Assignments Table */}
			<table className="w-full border-collapse border border-gray-200 bg-white rounded-lg overflow-hidden">
				<thead>
					<tr className="bg-gray-100 text-left">
						<th className="border-b border-gray-200 p-3">Title</th>
						<th className="border-b border-gray-200 p-3">Description</th>
						<th className="border-b border-gray-200 p-3">Deadline</th>
						<th className="border-b border-gray-200 p-3">Actions</th>
					</tr>
				</thead>
				<tbody>
					{assignments.map((assignment) => (
						<tr key={assignment.id}>
							<td className="p-3 border-b border-gray-200">
								{assignment.title}
							</td>
							<td className="p-3 border-b border-gray-200">
								{assignment.description}
							</td>
							<td className="p-3 border-b border-gray-200">
								{assignment.deadline}
							</td>
							<td className="p-3 border-b border-gray-200">
								<button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition">
									Submit
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Teaching Evaluation Report Button */}
			<div className="mt-8 text-center">
				<button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition">
					Teaching Evaluation Report
				</button>
			</div>
		</div>
	);
};

export default MyEnrollClassDetails;
