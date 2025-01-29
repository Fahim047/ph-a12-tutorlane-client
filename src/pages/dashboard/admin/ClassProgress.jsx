import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios } from '../../../hooks';
import ClassStats from '../teacher/DetailsPage/ClassStats';

const ClassProgress = () => {
	const { id } = useParams();
	const { axiosSecure } = useAxios();

	const { data: classDetails, isPending } = useQuery({
		queryKey: ['classDetails', id],
		queryFn: async () => {
			const response = await axiosSecure.get(`/classes/${id}`);
			return response.data;
		},
	});

	if (isPending) {
		return <LoadingComponent />;
	}

	return (
		<div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				{classDetails.title}
			</h1>
			<ClassStats stats={classDetails} />
		</div>
	);
};

export default ClassProgress;
