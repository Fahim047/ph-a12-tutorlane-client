import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingComponent from '../components/shared/LoadingComponent';
import { useAuth, useUserRole } from '../hooks';

const StudentRoutes = ({ children }) => {
	const { role, isLoading } = useUserRole();
	const { handleLogout } = useAuth();
	const navigate = useNavigate();

	if (isLoading) {
		return <LoadingComponent />;
	}
	if (role !== 'student') {
		const logout = async () => {
			await handleLogout();
			navigate('/');
			toast.warning('You are not authorized to access this page.');
		};
		logout();
	}
	return children;
};
StudentRoutes.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StudentRoutes;
