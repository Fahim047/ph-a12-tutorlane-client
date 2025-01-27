import { LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks';

const LogoutButton = () => {
	const { handleLogout } = useAuth();
	const navigate = useNavigate();
	const logout = async () => {
		await handleLogout();
		navigate('/');
		toast.success('Logged out successfully.');
	};
	return (
		<button
			onClick={logout}
			className="w-full flex items-center gap-2 text-start bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
		>
			<LogOutIcon size={20} />
			Logout
		</button>
	);
};

export default LogoutButton;
