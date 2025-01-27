import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingComponent from '../components/shared/LoadingComponent';
import { useAuth, useUserRole } from '../hooks';

const AdminRoutes = ({ children }) => {
	const { handleLogout } = useAuth();
	const { role, isLoading } = useUserRole();
	const navigate = useNavigate();

	if (isLoading) {
		return <LoadingComponent />;
	}
	if (role !== 'admin') {
		const logout = async () => {
			await handleLogout();
			navigate('/');
			toast.warning('You are not authorized to access this page.');
		};
		logout();
	}
	return children;
};
AdminRoutes.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AdminRoutes;
