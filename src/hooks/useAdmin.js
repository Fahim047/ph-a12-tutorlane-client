import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useAdmin = () => {
	const { user } = useAuth();
	const { axiosSecure } = useAxios();

	const {
		data: isAdmin,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['isAdmin', user?.email],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/users/admin?email=${user?.email}`
			);
			return response.data.isAdmin;
		},
		enabled: !!user?.email,
	});

	return { isAdmin, isLoading, error };
};

export default useAdmin;
