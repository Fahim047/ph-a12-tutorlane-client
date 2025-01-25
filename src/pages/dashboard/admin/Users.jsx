import UsersManagementPage from './UsersManagementPage';
const mockUsers = [
	{
		id: '1',
		name: 'Alice',
		email: 'alice@example.com',
		image: '/alice.jpg',
		role: 'user',
	},
	{
		id: '2',
		name: 'Bob',
		email: 'bob@example.com',
		image: '/bob.jpg',
		role: 'admin',
	},
	{
		id: '3',
		name: 'Charlie',
		email: 'charlie@example.com',
		image: '/charlie.jpg',
		role: 'user',
	},
];

const handleMakeAdmin = (userId) => {
	console.log('Make Admin:', userId);
	// Add API call to promote user to admin
};
const Users = () => {
	return (
		<UsersManagementPage users={mockUsers} onMakeAdmin={handleMakeAdmin} />
	);
};

export default Users;
