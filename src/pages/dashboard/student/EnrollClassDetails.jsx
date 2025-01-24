import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { assignments } from '../../../data/data';
const MyEnrollClassDetails = () => {
	const classTitle = 'Introduction to Python';
	const [showTERModal, setShowTERModal] = useState(false);
	const [feedback, setFeedback] = useState('');
	const [rating, setRating] = useState(0);

	// Handlers
	const handleSubmitAssignment = (assignmentId) => {
		console.log(`Assignment ${assignmentId} submitted`);
		// Mock increment submission count logic
	};

	const handleSendFeedback = () => {
		console.log('Teaching Evaluation Report:', {
			feedback,
			rating,
		});
		setShowTERModal(false); // Close modal after submission
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">{classTitle} - Assignments</h1>

			{/* Scrollable Table */}
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
									{assignment.deadline}
								</td>
								<td
									className="border border-gray-300 dark:border-gray-600 px-4 py-2"
									style={{ maxWidth: '250px' }}
								>
									<input
										type="file"
										className="block mb-2"
										onChange={(e) =>
											console.log(
												`File selected for ${assignment.id}:`,
												e.target.files[0]
											)
										}
									/>
									<button
										className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
										onClick={() => handleSubmitAssignment(assignment.id)}
									>
										Submit
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Teaching Evaluation Report Button */}
			<button
				className="mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
				onClick={() => setShowTERModal(true)}
			>
				Create Teaching Evaluation Report (TER)
			</button>

			{/* TER Modal */}
			{showTERModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
						<h2 className="text-lg font-bold mb-4">
							Teaching Evaluation Report
						</h2>
						<textarea
							className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4"
							placeholder="Write your feedback here..."
							rows="4"
							value={feedback}
							onChange={(e) => setFeedback(e.target.value)}
						/>
						<ReactStars
							count={5}
							size={30}
							activeColor="#ffd700"
							value={rating}
							onChange={(newRating) => setRating(newRating)}
						/>
						<div className="mt-4 flex justify-end space-x-4">
							<button
								className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
								onClick={() => setShowTERModal(false)}
							>
								Cancel
							</button>
							<button
								className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
								onClick={handleSendFeedback}
							>
								Send
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

MyEnrollClassDetails.propTypes = {
	classTitle: PropTypes.string.isRequired,
	assignments: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			deadline: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default MyEnrollClassDetails;
