import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TERModal from '../../../components/Modals/TERModal';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios } from '../../../hooks';
import AssignmentTable from './AssignmentTable';

const MyEnrollClassDetails = () => {
	const { id } = useParams();
	const { axiosSecure } = useAxios();
	const {
		data: classDetails,
		isPending,
		isError,
	} = useQuery({
		queryKey: ['classDetails', id],
		queryFn: async () => {
			const response = await axiosSecure.get(`/classes/${id}`);
			return response.data;
		},
	});
	const [showTERModal, setShowTERModal] = useState(false);

	const handleSubmitAssignment = async (assignmentId, assignmentUrl) => {
		try {
			const response = await axiosSecure.post(
				`/assignments/${assignmentId}/submit`,
				{
					assignmentUrl,
				}
			);
			console.log('Assignment submitted:', response.data);
		} catch (error) {
			console.error('Error submitting assignment:', error);
		}
	};

	const handleSendFeedback = (feedback, rating) => {
		console.log('Teaching Evaluation Report:', {
			feedback,
			rating,
		});
		setShowTERModal(false); // Close modal after submission
	};

	if (isPending) {
		return <LoadingComponent />;
	}
	if (isError) {
		return (
			<div className="text-center mt-8 text-red-500">
				Error fetching class details
			</div>
		);
	}

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">
				{classDetails?.title} (Assignments)
			</h1>

			<AssignmentTable
				classId={id}
				handleSubmitAssignment={handleSubmitAssignment}
			/>

			{/* Teaching Evaluation Report Button */}
			<button
				className="mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
				onClick={() => setShowTERModal(true)}
			>
				Create Teaching Evaluation Report (TER)
			</button>

			<TERModal
				showTERModal={showTERModal}
				setShowTERModal={setShowTERModal}
				handleSendFeedback={handleSendFeedback}
			/>
		</div>
	);
};

export default MyEnrollClassDetails;
