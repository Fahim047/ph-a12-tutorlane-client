import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth, useAxios } from '../../../hooks';

const AddClassPage = () => {
	const { axiosSecure } = useAxios();
	const { user } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		console.log('Class added:', data);
		try {
			const response = await axiosSecure.post('/teachers/classes', {
				...data,
				teacherName: user?.displayName,
				teacherEmail: user?.email,
			});
			if (response.status === 201) {
				toast.success(response.data?.message);
				reset();
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				Add Class
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				{/* Title */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Title
					</label>
					<input
						type="text"
						{...register('title', { required: 'Title is required' })}
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
						placeholder="Enter class title"
					/>
					{errors.title && (
						<p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
					)}
				</div>

				{/* Description */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Description
					</label>
					<textarea
						{...register('description', {
							required: 'Description is required',
							maxLength: {
								value: 300,
								message: 'Description cannot exceed 300 characters',
							},
						})}
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
						placeholder="Enter class description"
					/>
					{errors.description && (
						<p className="text-red-500 text-sm mt-1">
							{errors.description.message}
						</p>
					)}
				</div>
				{/* Image */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Thumbnail
					</label>
					<input
						type="url"
						{...register('thumbnail', {
							required: 'Thumbnail image URL is required',
							pattern: {
								value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
								message: 'Enter a valid image URL',
							},
						})}
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
						placeholder="Enter thumbnail image URL"
					/>
					{errors.image && (
						<p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
					)}
				</div>

				{/* Price */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Price
					</label>
					<input
						type="number"
						{...register('price', {
							required: 'Price is required',
							min: { value: 5, message: 'Price must be at least 5' },
						})}
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
						placeholder="Enter class price"
					/>
					{errors.price && (
						<p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
					)}
				</div>

				{/* Name (read-only) */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Name
					</label>
					<input
						type="text"
						value={user.displayName}
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
