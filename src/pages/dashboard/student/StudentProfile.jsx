import UserProfile from '../../../components/shared/UserProfile';

const mockUser = {
	name: 'John Doe',
	role: 'student',
	image: 'https://placehold.co/150',
	email: 'john.doe@example.com',
	phone: '+1234567890',
};
const StudentProfile = () => {
	return (
		<div>
			<UserProfile user={mockUser} />
		</div>
	);
};

export default StudentProfile;
