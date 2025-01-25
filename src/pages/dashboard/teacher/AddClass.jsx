import { useState } from 'react';

const AddClassPage = () => {
	const user = {
		name: 'John Doe',
		email: 'johndoe@example.com',
	};

	const [formData, setFormData] = useState({
		title: '',
		price: '',
		description: '',
		image: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Class added:', formData);
	};

	return (
		<div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				Add Class
			</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				{/* Title */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Title
					</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
						placeholder="Enter class title"
						required
					/>
				</div>

				{/* Name (read-only) */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Name
					</label>
					<input
						type="text"
						value={user.name}
						readOnly
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
					/>
				</div>

				{/* Email (read-only) */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Email
					</label>
					<input
						type="email"
						value={user.email}
						readOnly
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
					/>
				</div>

				{/* Price */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Price
					</label>
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
						placeholder="Enter class price"
						required
					/>
				</div>

				{/* Description */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Description
					</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
						placeholder="Enter class description"
						required
					/>
				</div>

				{/* Image */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Image URL
					</label>
					<input
						type="url"
						name="image"
						value={formData.image}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
						placeholder="Enter class image URL"
						required
					/>
				</div>

				{/* Submit Button */}
				<div>
					<button
						type="submit"
						className="w-full px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark"
					>
						Add Class
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddClassPage;
