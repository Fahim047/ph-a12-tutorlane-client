import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AssignmentModal from '../../../../components/Modals/AssignmentModal';
import LoadingComponent from '../../../../components/shared/LoadingComponent';
import AssignmentTable from '../../../../components/Tables/AssignmentTable';
import { useAxios } from '../../../../hooks';

const ClassStats = ({ stats }) => (
	<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
		<div className="bg-blue-500 text-white p-4 rounded-lg shadow">
			<h2 className="text-lg font-bold">Total Enrollments</h2>
			<p className="text-2xl">{stats?.totalEnrollments}</p>
		</div>
		<div className="bg-green-500 text-white p-4 rounded-lg shadow">
			<h2 className="text-lg font-bold">Total Assignments</h2>
			<p className="text-2xl">{stats?.totalAssignments}</p>
		</div>
		<div className="bg-orange-500 text-white p-4 rounded-lg shadow">
			<h2 className="text-lg font-bold">Total Submissions</h2>
			<p className="text-2xl">{stats?.submissions}</p>
		</div>
	</div>
);

const MyClassDetails = () => {
	const { id } = useParams();
	const { axiosSecure } = useAxios();
	const { data: classDetails, isPending } = useQuery({
		queryKey: ['classDetails', id],
		queryFn: async () => {
			const response = await axiosSecure.get(`/classes/${id}`);
			return response.data;
		},
	});
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleAddAssignment = async (assignment) => {
		console.log('New Assignment:', assignment);
		try {
			const response = await axiosSecure.post(
				`/teachers/classes/${id}/assignments`,
				assignment
			);
			if (response.status === 201) {
				toast.success(response.data?.message);
			}
		} catch (err) {
			console.error(err);
			toast.error(err?.message);
		}
	};

	if (isPending) {
		return <LoadingComponent />;
	}

	return (
		<div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				{classDetails.title}
			</h1>
			<ClassStats stats={classDetails} />
			<AssignmentTable classId={id} />
			<div className="mt-6">
				<button
					onClick={toggleModal}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
				>
					Create Assignment
				</button>
			</div>
			<AssignmentModal
				isOpen={isModalOpen}
				onClose={toggleModal}
				onAddAssignment={handleAddAssignment}
			/>
		</div>
	);
};

export default MyClassDetails;
