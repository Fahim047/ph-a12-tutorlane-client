import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyClassDetails = () => {
	const { id } = useParams();
	const [classDetails, setClassDetails] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newAssignment, setNewAssignment] = useState({
		title: '',
		description: '',
		deadline: '',
	});

	// Mock data fetching
	useEffect(() => {
		const fetchClassDetails = async () => {
			const mockClassDetails = {
				id,
				title: 'Advanced Mathematics',
				enrollments: 12,
				totalAssignments: 5,
				submissions: 25,
				assignments: [
					{
						id: 1,
						title: 'Assignment 1',
						description: 'Introduction to algebra',
						deadline: '2025-02-01',
					},
					{
						id: 2,
						title: 'Assignment 2',
						description: 'Linear equations',
						deadline: '2025-02-15',
					},
				],
			};
			setClassDetails(mockClassDetails);
		};

		fetchClassDetails();
	}, [id]);

	// Toggle Modal
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	// Handle Form Input Change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewAssignment((prev) => ({ ...prev, [name]: value }));
	};

	// Add Assignment Handler
	const handleAddAssignment = () => {
		console.log('Adding assignment:', newAssignment);
		setClassDetails((prev) => ({
			...prev,
			totalAssignments: prev.totalAssignments + 1,
			assignments: [
				...prev.assignments,
				{
					...newAssignment,
					id: prev.assignments.length + 1,
				},
			],
		}));
		// Reset form and close modal
		setNewAssignment({ title: '', description: '', deadline: '' });
		toggleModal();
	};

	if (!classDetails) {
		return <div>Loading...</div>;
	}

	return (
		<div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				{classDetails.title}
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="bg-blue-500 text-white p-4 rounded-lg shadow">
					<h2 className="text-lg font-bold">Total Enrollments</h2>
					<p className="text-2xl">{classDetails.enrollments}</p>
				</div>
				<div className="bg-green-500 text-white p-4 rounded-lg shadow">
					<h2 className="text-lg font-bold">Total Assignments</h2>
					<p className="text-2xl">{classDetails.totalAssignments}</p>
				</div>
				<div className="bg-orange-500 text-white p-4 rounded-lg shadow">
					<h2 className="text-lg font-bold">Total Submissions</h2>
					<p className="text-2xl">{classDetails.submissions}</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
					Class Assignments
				</h2>
				<table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
					<thead>
						<tr>
							<th className="border border-gray-300 px-4 py-2">Title</th>
							<th className="border border-gray-300 px-4 py-2">Description</th>
							<th className="border border-gray-300 px-4 py-2">Deadline</th>
						</tr>
					</thead>
					<tbody>
						{classDetails.assignments.map((assignment) => (
							<tr key={assignment.id}>
								<td className="border border-gray-300 px-4 py-2">
									{assignment.title}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{assignment.description}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{assignment.deadline}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="mt-6">
				<button
					onClick={toggleModal}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
				>
					Create Assignment
				</button>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-lg p-6 w-96">
						<h3 className="text-xl font-bold mb-4">Add Assignment</h3>
						<div className="mb-4">
							<label className="block text-gray-700">Title</label>
							<input
								type="text"
								name="title"
								value={newAssignment.title}
								onChange={handleInputChange}
								className="w-full border border-gray-300 rounded-lg px-3 py-2"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700">Description</label>
							<textarea
								name="description"
								value={newAssignment.description}
								onChange={handleInputChange}
								className="w-full border border-gray-300 rounded-lg px-3 py-2"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700">Deadline</label>
							<input
								type="date"
								name="deadline"
								value={newAssignment.deadline}
								onChange={handleInputChange}
								className="w-full border border-gray-300 rounded-lg px-3 py-2"
							/>
						</div>
						<div className="flex justify-end space-x-2">
							<button
								onClick={toggleModal}
								className="px-4 py-2 bg-gray-500 text-white rounded-lg"
							>
								Cancel
							</button>
							<button
								onClick={handleAddAssignment}
								className="px-4 py-2 bg-blue-500 text-white rounded-lg"
							>
								Add Assignment
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyClassDetails;
