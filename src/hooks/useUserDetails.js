import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useUserDetails = () => {
	const { user } = useAuth();
	const { axiosSecure } = useAxios();

	const {
		data: userDetails,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['userDetails', user?.email],
		queryFn: async () => {
			const response = await axiosSecure.get(`/users?email=${user?.email}`);
			return response.data;
		},
		enabled: !!user?.email, // Only run the query if email exists
	});

	return { userDetails, isLoading, error };
};

export default useUserDetails;
