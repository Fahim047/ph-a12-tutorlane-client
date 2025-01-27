import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../../../../components/shared/LoadingComponent';
import { useAuth, useAxios } from '../../../../hooks';
import TeacherClassCard from './TeacherClassCard';

const MyClasses = () => {
	const { user } = useAuth();
	const { axiosSecure } = useAxios();
	const navigate = useNavigate();

	const { data: classes, isPending } = useQuery({
		queryKey: ['teacherClasses', user?.email],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/teachers/classes?email=${user?.email}`
			);
			return response.data;
		},
	});

	// Function to delete a class
	const handleDeleteClass = async (id) => {
		try {
			await axiosSecure.delete(`/teachers/classes/${id}`);
			alert('Class deleted successfully.');
		} catch (error) {
			console.error('Failed to delete class:', error);
			alert('Failed to delete class. Please try again.');
		}
	};

	// Function to update a class
	const handleUpdateClass = async (updatedData) => {
		console.log('Updating class:', updatedData);
		try {
			await axiosSecure.patch(
				`/teachers/classes/${updatedData.id}`,
				updatedData
			);
			alert('Class updated successfully.');
		} catch (error) {
			console.error('Failed to update class:', error);
			alert('Failed to update class. Please try again.');
		}
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
