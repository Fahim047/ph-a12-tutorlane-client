import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingComponent from '../../../../components/shared/LoadingComponent';
import { useAuth, useAxios } from '../../../../hooks';
import TeacherClassCard from './TeacherClassCard';

const MyClasses = () => {
	const { user } = useAuth();
	const { axiosSecure } = useAxios();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { data: classes, isPending } = useQuery({
		queryKey: ['teacherClasses', user?.email],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/teachers/classes?email=${user?.email}`
			);
			return response.data;
		},
	});

	// Mutation for deleting a class
	const deleteClassMutation = useMutation({
		mutationFn: (id) => axiosSecure.delete(`/teachers/classes/${id}`),
		onSuccess: () => {
			queryClient.invalidateQueries(['teacherClasses', user?.email]);
			toast.success('Class deleted successfully!');
		},
		onError: (error) => {
			console.error('Failed to delete class:', error);
			toast.error('Failed to delete class. Please try again.');
		},
	});

	// Mutation for updating a class
	const updateClassMutation = useMutation({
		mutationFn: (updatedData) =>
			axiosSecure.patch(`/teachers/classes/${updatedData.id}`, updatedData),
		onSuccess: () => {
			queryClient.invalidateQueries(['teacherClasses', user?.email]);
			toast.success('Class updated successfully!');
		},
		onError: (error) => {
			console.error('Failed to update class:', error);
			toast.error('Failed to update class. Please try again.');
		},
	});

	const handleDeleteClass = (id) => {
		toast.warning(
			<div>
				<p>Are you sure you want to delete this class?</p>
				<button
					onClick={() => {
						deleteClassMutation.mutate(id);
						toast.dismiss();
					}}
					style={{
						marginRight: '10px',
						padding: '5px 10px',
						background: 'red',
						color: 'white',
						border: 'none',
						borderRadius: '5px',
					}}
				>
					Yes
				</button>
				<button
					onClick={() => toast.dismiss()}
					style={{
						padding: '5px 10px',
						background: 'gray',
						color: 'white',
						border: 'none',
						borderRadius: '5px',
					}}
				>
					No
				</button>
			</div>,
			{
				position: 'top-center',
				autoClose: false,
				closeOnClick: false,
				draggable: true,
			}
		);
	};

	const handleUpdateClass = (updatedData) => {
		updateClassMutation.mutate(updatedData);
	};

	const handleSeeDetails = (cls) => {
		if (cls.status === 'approved') {
			console.log('Redirecting to details page for:', cls);
		}
		navigate(`/dashboard/teacher/my-classes/${cls._id}`);
	};

	if (isPending) {
		return <LoadingComponent />;
	}

	return (
		<div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				My Classes
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{classes.map((cls) => (
					<TeacherClassCard
						key={cls._id}
						cls={cls}
						onSeeDetails={handleSeeDetails}
						onUpdate={handleUpdateClass}
						onDelete={() => handleDeleteClass(cls._id)}
					/>
				))}
			</div>
		</div>
	);
};

export default MyClasses;
