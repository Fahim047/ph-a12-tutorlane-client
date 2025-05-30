import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import axiosPublic from '../../api/axios';
import LoadingComponent from '../../components/shared/LoadingComponent';
import { useTheme } from '../../hooks';

const ClassDetailsPage = () => {
	const { darkMode } = useTheme();
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		data: classDetails,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['classDetails', id],
		queryFn: async () => {
			const res = await axiosPublic.get(`/classes/${id}`);
			return res.data;
		},
	});

	if (isLoading) {
		return <LoadingComponent />;
	}

	if (error) {
		return (
			<p className="text-center mt-8 text-red-500">
				Failed to load class details. Please try again later.
			</p>
		);
	}

	const handlePay = () => {
		navigate(`/classes/${id}/payment`); // Redirect to the payment page
	};

	return (
		<div
			className={`max-w-4xl mx-auto mt-12 px-4 py-12 ${darkMode ? 'dark' : ''}`}
		>
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				{classDetails.title}
			</h1>

			{/* Class Details */}
			<div className="space-y-4">
				<p className="text-gray-700 dark:text-gray-300">
					<span className="font-semibold">Teacher:</span>{' '}
					{classDetails.teacherName}
				</p>
				<img
					src={classDetails.thumbnail}
					alt={classDetails.title}
					className="w-full rounded-lg shadow-lg"
				/>

				<p className="text-gray-700 dark:text-gray-300">
					<span className="font-semibold">Price:</span> ${classDetails.price}
				</p>
				<p className="text-gray-700 dark:text-gray-300">
					<span className="font-semibold">Description:</span>{' '}
					{classDetails.description}
				</p>
			</div>

			{/* Pay Button */}
			<div className="mt-6">
				<button
					onClick={handlePay}
					className="w-full px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/80 transition-colors duration-300"
				>
					Pay Now
				</button>
			</div>
		</div>
	);
};

export default ClassDetailsPage;
