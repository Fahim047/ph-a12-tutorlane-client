import UserProfile from '../../../components/shared/UserProfile';
const mockUser = {
	name: 'Teacher User',
	role: 'Teacher',
	image: 'https://placehold.co/150',
	email: 'teacher@tutorlane.com',
	phone: '+8801521578288',
};
const TeacherProfile = () => {
	return <UserProfile />;
};

export default TeacherProfile;
