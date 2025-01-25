import { useState } from 'react';

const TeachPage = () => {
	const [user, setUser] = useState({
		name: 'John Doe',
		image: 'https://placehold.co/150',
		email: 'john.doe@example.com',
		role: 'user', // possible roles: user, teacher
		status: '', // possible statuses: '', 'pending', 'approved', 'rejected'
	});
	const [formData, setFormData] = useState({
		experience: 'beginner',
		title: '',
		category: 'Web Development',
	});
	const [message, setMessage] = useState('');

	const categories = [
		'Web Development',
		'Digital Marketing',
		'Graphic Design',
		'Data Science',
		'Cybersecurity',
	];

	// Handle input change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Submit form handler
	const handleSubmit = () => {
		if (user.role === 'teacher') {
			setMessage('You are already a teacher.');
			return;
		}

		console.log('Form submitted:', formData);
		setUser((prev) => ({ ...prev, status: 'pending' }));
		setMessage('Your request has been submitted for review.');
	};

	// Request to apply again
	const handleRequestAgain = () => {
		setUser((prev) => ({ ...prev, status: 'pending' }));
		setMessage('Your request has been resubmitted for review.');
	};

	// Display based on status
	if (user.role === 'teacher') {
		return (
			<div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
					You are already a teacher!
				</h1>
				<p className="text-gray-600 dark:text-gray-400">
					Thank you for being part of our teaching team.
				</p>
			</div>
		);
	}

	if (user.status === 'pending') {
		return (
			<div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
					Your application is under review.
				</h1>
				<p className="text-gray-600 dark:text-gray-400 mb-6">
					We will notify you once a decision is made.
				</p>
				{user.status === 'rejected' && (
					<button
						onClick={handleRequestAgain}
						className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
					>
						Request to Apply Again
					</button>
				)}
			</div>
		);
	}

	return (
		<div className="mt-16 max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				Teach on TutorLane
			</h1>
			{message && (
				<div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
					{message}
				</div>
			)}
			<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="flex flex-col items-center">
					<img
						src={user.image}
						alt="User"
						className="w-32 h-32 rounded-full mb-4"
					/>
					<h2 className="text-lg font-semibold text-gray-700 dark:text-white">
						{user.name}
					</h2>
					<p className="text-gray-600 dark:text-gray-400">{user.email}</p>
				</div>
				<div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
					>
						<div className="mb-4">
							<label
								htmlFor="experience"
								className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
							>
								Experience Level
							</label>
							<select
								id="experience"
								name="experience"
								value={formData.experience}
								onChange={handleInputChange}
								className="w-full border-gray-300 rounded-lg px-4 py-2"
							>
								<option value="beginner">Beginner</option>
								<option value="mid-level">Mid-level</option>
								<option value="experienced">Experienced</option>
							</select>
						</div>
						<div className="mb-4">
							<label
								htmlFor="title"
								className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
							>
								Title
							</label>
							<input
								id="title"
								name="title"
								type="text"
								value={formData.title}
								onChange={handleInputChange}
								className="w-full border-gray-300 rounded-lg px-4 py-2"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="category"
								className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
							>
								Category
							</label>
							<select
								id="category"
								name="category"
								value={formData.category}
								onChange={handleInputChange}
								className="w-full border-gray-300 rounded-lg px-4 py-2"
							>
								{categories.map((cat) => (
									<option key={cat} value={cat}>
										{cat}
									</option>
								))}
							</select>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600"
						>
							Submit for Review
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TeachPage;
