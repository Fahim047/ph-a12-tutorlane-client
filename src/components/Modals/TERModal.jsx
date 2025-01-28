import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const TERModal = ({ showTERModal, setShowTERModal, handleSendFeedback }) => {
	const [feedback, setFeedback] = useState('');
	const [rating, setRating] = useState(0);
	const [error, setError] = useState('');

	useEffect(() => {
		if (showTERModal) {
			setFeedback('');
			setRating(0);
			setError('');
		}
	}, [showTERModal]);

	const handleClickFeedback = () => {
		setError('');
		if (rating < 1) {
			setError('Please provide a rating of at least 1 star.');
			return;
		}
		if (!feedback) {
			setError('Please provide feedback.');
			return;
		}

		handleSendFeedback(feedback, rating);
		setFeedback('');
		setRating(0);
		setShowTERModal(false);
	};

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
					{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
					<div className="mt-4 flex justify-end space-x-4">
						<button
							className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
							onClick={() => setShowTERModal(false)}
						>
							Cancel
						</button>
						<button
							className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
							onClick={handleClickFeedback}
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
