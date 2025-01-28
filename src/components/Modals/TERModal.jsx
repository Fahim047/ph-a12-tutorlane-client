import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const TERModal = ({ showTERModal, setShowTERModal, handleSendFeedback }) => {
	const [feedback, setFeedback] = useState('');
	const [rating, setRating] = useState(0);

	return (
		showTERModal && (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
				<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
					<h2 className="text-lg font-bold mb-4">Teaching Evaluation Report</h2>
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
							onClick={() => handleSendFeedback(feedback, rating)}
						>
							Send
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default TERModal;
