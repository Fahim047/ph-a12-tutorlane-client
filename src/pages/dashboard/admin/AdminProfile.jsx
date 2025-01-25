import UserProfile from '../../../components/shared/UserProfile';
const mockUser = {
	name: 'Admin User',
	role: 'Admin',
	image: 'https://placehold.co/150',
	email: 'admin@tutorlane.com',
	phone: '+8801521578288',
};
const AdminProfile = () => {
	return <UserProfile user={mockUser} />;
};

export default AdminProfile;
