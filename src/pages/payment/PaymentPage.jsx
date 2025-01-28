import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAxios, useUserDetails } from '../../hooks';

const PaymentPage = () => {
	const { id } = useParams();
	const { userDetails } = useUserDetails();
	const { axiosSecure } = useAxios();
	const navigate = useNavigate();

	const {
		data: classDetails,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['classDetails', id],
		queryFn: async () => {
			const res = await axiosSecure.get(`/classes/${id}`);
			return res.data;
		},
	});

	const { register, handleSubmit, setValue } = useForm({
		defaultValues: {
			cardNumber: '4242 4242 4242 4242',
			expiryDate: '12/25',
			cvv: '123',
			amount: '',
		},
	});
	if (classDetails) {
		setValue('amount', classDetails.price);
	}

	const onSubmit = async (data) => {
		try {
			const response = await axiosSecure.post(`/classes/${id}/payment`, {
				...data,
				classId: id,
				userId: userDetails._id,
			});

			if (response.status === 200) {
				toast.success('Payment Successful!');
				navigate('/dashboard/my-enroll-classes');
			} else {
				toast.error('Payment failed. Please try again.');
			}
		} catch (error) {
			console.error('Payment error:', error);
			toast.error('An error occurred during payment. Please try again.');
		}
	};

	if (isLoading) return <p>Loading class details...</p>;
	if (error)
		return <p className="text-red-500">Failed to load class details.</p>;

	return (
		<div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				Payment Page
			</h1>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				{/* Card Number */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Card Number
					</label>
					<input
						type="text"
						{...register('cardNumber')}
						readOnly
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 cursor-not-allowed"
					/>
				</div>

				{/* Expiry Date */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Expiry Date
					</label>
					<input
						type="text"
						{...register('expiryDate')}
						readOnly
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 cursor-not-allowed"
					/>
				</div>

				{/* CVV */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						CVV
					</label>
					<input
						type="text"
						{...register('cvv')}
						readOnly
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 cursor-not-allowed"
					/>
				</div>
				{/* Amount to Pay */}
				<div>
					<label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
						Amount to Pay
					</label>
					<input
						type="text"
						{...register('amount')}
						readOnly
						className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 cursor-not-allowed"
					/>
				</div>

				{/* Pay Now Button */}
				<div>
					<button
						type="submit"
						className="w-full px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark"
					>
						Pay Now
					</button>
				</div>
			</form>
		</div>
	);
};

export default PaymentPage;
