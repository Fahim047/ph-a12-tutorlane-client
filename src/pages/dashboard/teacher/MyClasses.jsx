import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyClasses = () => {
	const navigate = useNavigate();
	// Static mock data for classes
	const [classes, setClasses] = useState([
		{
			id: 1,
			title: 'Advanced Mathematics',
			name: 'John Doe',
			email: 'johndoe@example.com',
			price: 150,
			description: 'A comprehensive guide to advanced mathematics.',
			image: 'https://placehold.co/150',
			status: 'pending', // pending, approved, or rejected
		},
		{
			id: 2,
			title: 'Physics Fundamentals',
			name: 'Jane Smith',
			email: 'janesmith@example.com',
			price: 200,
			description: 'Learn the basics of physics with practical examples.',
			image: 'https://placehold.co/150',
			status: 'approved',
		},
	]);

	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selectedClass, setSelectedClass] = useState(null);

	const handleUpdate = (cls) => {
		console.log('Updating class:', cls);
	};

	const handleDelete = (cls) => {
		setSelectedClass(cls);
		setShowDeleteModal(true);
	};

	const confirmDelete = () => {
		setClasses(classes.filter((cls) => cls.id !== selectedClass.id));
		setShowDeleteModal(false);
		setSelectedClass(null);
	};

	const handleSeeDetails = (cls) => {
		if (cls.status === 'approved') {
			console.log('Redirecting to details page for:', cls);
		}
		navigate(`/dashboard/teacher/my-classes/${cls.id}`);
	};

	return (
		<div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				My Classes
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{classes.map((cls) => (
					<div
						key={cls.id}
						className="border rounded-lg shadow p-4 bg-gray-50 dark:bg-gray-800"
					>
						<img
							src={cls.image}
							alt={cls.title}
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h2 className="text-xl font-semibold text-gray-800 dark:text-white">
							{cls.title}
						</h2>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
							{cls.description}
						</p>
						<p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
							<strong>Price:</strong> ${cls.price}
						</p>
						<p className="text-sm text-gray-700 dark:text-gray-300">
							<strong>Status:</strong> {cls.status}
						</p>
						<div className="flex justify-between mt-4">
							<button
								onClick={() => handleSeeDetails(cls)}
								disabled={cls.status !== 'approved'}
								className={`px-4 py-2 rounded-lg ${
									cls.status === 'approved'
										? 'bg-green-500 text-white hover:bg-green-600'
										: 'bg-gray-400 text-gray-600 cursor-not-allowed'
								}`}
							>
								See Details
							</button>
							<button
								onClick={() => handleUpdate(cls)}
								className="px-4 py-2 bg-blue-500 text-white rounded-lg"
							>
								Update
							</button>
							<button
								onClick={() => handleDelete(cls)}
								className="px-4 py-2 bg-red-500 text-white rounded-lg"
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Delete Confirmation Modal */}
			{showDeleteModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h2 className="text-xl font-bold">Confirm Delete</h2>
						<p className="text-gray-600 mt-2">
							Are you sure you want to delete the class{' '}
							<strong>{selectedClass?.title}</strong>?
						</p>
						<div className="mt-4 flex justify-end gap-2">
							<button
								onClick={() => setShowDeleteModal(false)}
								className="px-4 py-2 bg-gray-300 rounded-lg"
							>
								Cancel
							</button>
							<button
								onClick={confirmDelete}
								className="px-4 py-2 bg-red-500 text-white rounded-lg"
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyClasses;
