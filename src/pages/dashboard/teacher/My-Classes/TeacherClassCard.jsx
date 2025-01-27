import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const TeacherClassCard = ({ cls, onSeeDetails, onUpdate, onDelete }) => {
	const [showUpdateModal, setShowUpdateModal] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: cls.title,
			description: cls.description,
			price: cls.price,
			thumbnail: cls.thumbnail,
		},
	});

	const handleUpdateSubmit = (data) => {
		onUpdate({ id: cls._id, ...data });
		setShowUpdateModal(false);
		reset();
	};

	return (
		<div className="border rounded-lg shadow p-4 bg-gray-50 dark:bg-gray-800">
			<img
				src={cls.thumbnail}
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
					onClick={() => onSeeDetails(cls)}
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
					onClick={() => {
						setShowUpdateModal(true);
						reset({
							title: cls.title,
							description: cls.description,
							price: cls.price,
							thumbnail: cls.thumbnail,
						});
					}}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg"
				>
					Update
				</button>
				<button
					onClick={() => onDelete(cls)}
					className="px-4 py-2 bg-red-500 text-white rounded-lg"
				>
					Delete
				</button>
			</div>

			{/* Update Modal */}
			{showUpdateModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg w-96">
						<h2 className="text-xl font-bold mb-4">Update Class</h2>
						<form
							onSubmit={handleSubmit(handleUpdateSubmit)}
							className="space-y-4"
						>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Title
								</label>
								<input
									type="text"
									{...register('title', { required: 'Title is required' })}
									className="w-full mt-2 p-2 border rounded-lg"
								/>
								{errors.title && (
									<p className="text-red-500 text-sm mt-1">
										{errors.title.message}
									</p>
								)}
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Description
								</label>
								<textarea
									{...register('description', {
										required: 'Description is required',
										minLength: {
											value: 10,
											message: 'Description must be at least 10 characters',
										},
									})}
									className="w-full mt-2 p-2 border rounded-lg"
								></textarea>
								{errors.description && (
									<p className="text-red-500 text-sm mt-1">
										{errors.description.message}
									</p>
								)}
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Price
								</label>
								<input
									type="number"
									{...register('price', {
										required: 'Price is required',
										min: {
											value: 5,
											message: 'Price must be at least $5',
										},
									})}
									className="w-full mt-2 p-2 border rounded-lg"
								/>
								{errors.price && (
									<p className="text-red-500 text-sm mt-1">
										{errors.price.message}
									</p>
								)}
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Thumbnail URL
								</label>
								<input
									type="text"
									{...register('thumbnail', {
										required: 'Thumbnail URL is required',
										pattern: {
											value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/,
											message: 'Enter a valid image URL',
										},
									})}
									className="w-full mt-2 p-2 border rounded-lg"
								/>
								{errors.thumbnail && (
									<p className="text-red-500 text-sm mt-1">
										{errors.thumbnail.message}
									</p>
								)}
							</div>
							<div className="flex justify-end gap-2">
								<button
									type="button"
									onClick={() => setShowUpdateModal(false)}
									className="px-4 py-2 bg-gray-300 rounded-lg"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="px-4 py-2 bg-blue-500 text-white rounded-lg"
								>
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

TeacherClassCard.propTypes = {
	cls: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
	onSeeDetails: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
};

export default TeacherClassCard;
