import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth, useAxios, useUserRole } from '../hooks';
import { asyncHandler } from '../utils/asyncHandler';

const TeachPage = () => {
	const { user } = useAuth();
	const { axiosSecure } = useAxios();
	const { role } = useUserRole();
	const [message, setMessage] = useState('');
	const { data: request, isPending } = useQuery({
		queryKey: ['teacherRequest', user?.email],
		queryFn: asyncHandler(async () => {
			const response = await axiosSecure.get(
				`/users/teach-request?email=${user?.email}`
			);
			return response.data;
		}),
	});
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			experience: 'beginner',
			title: '',
			category: 'Web Development',
		},
	});
	if (isPending) {
		return <h2>Loading request data...</h2>;
	}

	const categories = [
		'Web Development',
		'Digital Marketing',
		'Graphic Design',
		'Data Science',
		'Cybersecurity',
	];
	const onSubmit = async (data) => {
		if (role === 'teacher') {
			setMessage('You are already a teacher.');
			return;
		}
		try {
			if (request && request.status === 'rejected') {
				await axiosSecure.patch('/users/teach-request', {
					...data,
					email: user.email,
				});
				setMessage('Your request has been resubmitted for review.');
			} else {
				await axiosSecure.post('/users/teach-request', {
					...data,
					name: user.displayName,
					email: user.email,
					image: user.photoURL,
				});
				setMessage('Your request has been submitted for review.');
			}
			reset();
		} catch (error) {
			setMessage(
				`Error: ${error.response?.data?.message || 'Failed to submit request.'}`
			);
		}
	};

	if (role === 'teacher') {
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

	if (request.status === 'pending') {
		return (
			<div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
					Your application is under review.
				</h1>
				<p className="text-gray-600 dark:text-gray-400 mb-6">
					We will notify you once a decision is made.
				</p>
			</div>
		);
	}

	return (
		<div className="mt-16 max-w-4xl mx-auto p-6 min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				Teach on TutorLane
			</h1>
			{message && (
				<div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
					{message}
				</div>
			)}
			{request.status === 'rejected' && (
				<div className="mb-4 p-4 bg-red-100 text-red-500 font-bold">
					Oops! Your previous request is rejected!
				</div>
			)}
			<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="flex flex-col items-center">
					<img
						src={user.photoURL}
						alt={user.displayName}
						className="w-32 h-32 rounded-full mb-4"
					/>
					<h2 className="text-lg font-semibold text-gray-700 dark:text-white">
						{user.name}
					</h2>
					<p className="text-gray-600 dark:text-gray-400">{user.email}</p>
				</div>
				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
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
								{...register('experience')}
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
								{...register('title', { required: 'Title is required' })}
								className="w-full border-gray-300 rounded-lg px-4 py-2"
							/>
							{errors.title && (
								<p className="text-red-500 text-sm mt-1">
									{errors.title.message}
								</p>
							)}
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
								{...register('category')}
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
							{request.status === 'rejected'
								? 'Request again!'
								: 'Submit for Review'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TeachPage;
