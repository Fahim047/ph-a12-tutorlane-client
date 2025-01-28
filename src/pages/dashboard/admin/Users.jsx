import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios } from '../../../hooks';
import UsersManagementPage from './UsersManagementPage';

const Users = () => {
	const { axiosSecure } = useAxios();
	const { data: users, isPending } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await axiosSecure.get('/admin/users');
			return response.data;
		},
	});
	const handleMakeAdmin = async (userId) => {
		console.log('Make Admin:', userId);
		try {
			const response = await axiosSecure.patch(
				`/admin/users/${userId}/make-admin`
			);
			if (response.status === 200) {
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
	return <UsersManagementPage users={users} onMakeAdmin={handleMakeAdmin} />;
};

export default Users;
