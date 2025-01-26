import { Navigate, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import LoadingComponent from '../components/shared/LoadingComponent';
import { useAuth } from '../hooks';

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) return <LoadingComponent />;

	if (user && user?.accessToken) return children;

	return <Navigate state={location.pathname} to="/login" />;
};

PrivateRoutes.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
