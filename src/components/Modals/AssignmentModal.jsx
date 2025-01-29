import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const AssignmentModal = ({ isOpen, onClose, onAddAssignment, isLoading }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		await onAddAssignment(data);
		reset();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-neutral dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
				<h3 className="text-xl font-bold mb-4">Add Assignment</h3>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<label className="block text-gray-700">Title</label>
						<input
							type="text"
							{...register('title', { required: 'Title is required' })}
							className="w-full border border-gray-300 rounded-lg px-3 py-2"
						/>
						{errors.title && (
							<p className="text-red-500 text-sm mt-1">
								{errors.title.message}
							</p>
						)}
					</div>
					<div>
						<label className="block text-gray-700">Description</label>
						<textarea
							{...register('description', {
								required: 'Description is required',
							})}
							className="w-full border border-gray-300 rounded-lg px-3 py-2"
						/>
						{errors.description && (
							<p className="text-red-500 text-sm mt-1">
								{errors.description.message}
							</p>
						)}
					</div>
					<div>
						<label className="block text-gray-700">Deadline</label>
						<input
							type="date"
							{...register('deadline', { required: 'Deadline is required' })}
							className="w-full border border-gray-300 rounded-lg px-3 py-2"
						/>
						{errors.deadline && (
							<p className="text-red-500 text-sm mt-1">
								{errors.deadline.message}
							</p>
						)}
					</div>
					<div className="flex justify-end space-x-2">
						<button
							type="button"
							onClick={() => {
								reset();
								onClose();
							}}
							className="px-4 py-2 bg-gray-500 text-white rounded-lg"
							disabled={isLoading}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded-lg"
							disabled={isLoading} // Disable submit button during loading
						>
							{isLoading ? 'Adding...' : 'Add Assignment'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
AssignmentModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onAddAssignment: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

export default AssignmentModal;
