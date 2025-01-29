import { useMutation, useQueryClient } from '@tanstack/react-query';
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
	const queryClient = useQueryClient();

	// Mutation for adding a new class
	const mutation = useMutation({
		mutationFn: async (newClass) => {
			const response = await axiosSecure.post('/teachers/classes', newClass);
			return response.data;
		},
		onSuccess: () => {
			toast.success('Class added successfully');
			reset();
			queryClient.invalidateQueries(['teacherClasses', user?.email]);
		},
		onError: (error) => {
			console.error('Error adding class:', error);
			toast.error('Failed to add class. Please try again.');
		},
	});

	const onSubmit = (data) => {
		const newClass = {
			...data,
			teacherName: user?.displayName,
			teacherEmail: user?.email,
		};

		mutation.mutate(newClass);
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

				{/* Thumbnail */}
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
					{errors.thumbnail && (
						<p className="text-red-500 text-sm mt-1">
							{errors.thumbnail.message}
						</p>
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
						value={user?.displayName || ''}
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
						value={user?.email || ''}
						readOnly
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
					/>
				</div>

				{/* Submit Button */}
				<div>
					<button
						type="submit"
						disabled={mutation.isLoading}
						className="w-full px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed"
					>
						{mutation.isLoading ? 'Adding Class...' : 'Add Class'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddClassPage;
