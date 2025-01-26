import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useUserRole = () => {
	const { user } = useAuth();
	const { axiosSecure } = useAxios();
	const {
		data: role,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['userRole', user?.email],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/users/role?email=${user?.email}`
			);
			return response.data.role;
		},
		enabled: !!user?.email,
	});

	return { role, isLoading, error };
};

export default useUserRole;
