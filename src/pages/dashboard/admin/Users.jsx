import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios } from '../../../hooks';
import UsersManagementPage from './UsersManagementPage';

const Users = () => {
	const { axiosSecure } = useAxios();
	const queryClient = useQueryClient();

	const { data: users, isPending } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await axiosSecure.get('/admin/users');
			return response.data;
		},
	});

	const { mutate: makeAdmin } = useMutation({
		mutationFn: async (userId) => {
			const response = await axiosSecure.patch(
				`/admin/users/${userId}/make-admin`
			);
			return response.data;
		},
		onSuccess: (data) => {
			toast.success(data?.message || 'User promoted to admin successfully!');
			queryClient.invalidateQueries(['users']); // Refresh users list
		},
		onError: (err) => {
			toast.error(err?.message || 'Failed to promote user to admin.');
		},
	});

	if (isPending) {
		return <LoadingComponent />;
	}

	return <UsersManagementPage users={users} onMakeAdmin={makeAdmin} />;
};

export default Users;
