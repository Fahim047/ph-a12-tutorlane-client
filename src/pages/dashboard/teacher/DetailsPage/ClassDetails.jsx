import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AssignmentModal from '../../../../components/Modals/AssignmentModal';
import LoadingComponent from '../../../../components/shared/LoadingComponent';
import AssignmentTable from '../../../../components/Tables/AssignmentTable';
import { useAxios } from '../../../../hooks';
import ClassStats from './ClassStats';

const MyClassDetails = () => {
	const { id } = useParams();
	const { axiosSecure } = useAxios();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data: classDetails, isPending } = useQuery({
		queryKey: ['classDetails', id],
		queryFn: async () => {
			const response = await axiosSecure.get(`/classes/${id}`);
			return response.data;
		},
	});
	const queryClint = useQueryClient();

	const { mutate: createAssignment, isPending: isCreating } = useMutation({
		mutationFn: async (assignment) => {
			await axiosSecure.post(`/teachers/classes/${id}/assignments`, assignment);
		},
		onSuccess: () => {
			setIsModalOpen(false);
			toast.success('Assignment created successfully!');
			queryClint.invalidateQueries(['classDetails', id]);
		},
		onError: (error) => {
			toast.error('Failed to create assignment. Please try again.');
			console.error('Error creating assignment:', error);
		},
	});

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	if (isPending) {
		return <LoadingComponent />;
	}

	return (
		<div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				{classDetails.title}
			</h1>
			<div className="mb-6 flex justify-end">
				<button
					onClick={toggleModal}
					className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
				>
					<PlusIcon className="w-4 h-4 mr-2" />
					Create Assignment
				</button>
			</div>
			<ClassStats stats={classDetails} />
			<AssignmentTable classId={id} />
			<AssignmentModal
				isOpen={isModalOpen}
				onClose={toggleModal}
				onAddAssignment={createAssignment}
				isLoading={isCreating}
			/>
		</div>
	);
};

export default MyClassDetails;
