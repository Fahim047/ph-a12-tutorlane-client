import { useQuery } from '@tanstack/react-query';
import LoadingComponent from '../../../components/shared/LoadingComponent';
import { useAxios } from '../../../hooks';
import UsersManagementPage from './UsersManagementPage';

const handleMakeAdmin = (userId) => {
	console.log('Make Admin:', userId);
};
const Users = () => {
	const { axiosSecure } = useAxios();
	const { data: users, isPending } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await axiosSecure.get('/admin/users');
			return response.data;
		},
	});
	if (isPending) {
		return <LoadingComponent />;
	}
	return <UsersManagementPage users={users} onMakeAdmin={handleMakeAdmin} />;
};

export default Users;
