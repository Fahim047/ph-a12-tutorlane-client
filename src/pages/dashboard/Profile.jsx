const Profile = () => {
	const user = {
		name: 'John Doe',
		role: 'Student',
		image: 'https://via.placeholder.com/150',
		email: 'john.doe@example.com',
		phone: '+1234567890',
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<div className="flex items-center space-x-6">
				<img
					src={user.image}
					alt={user.name}
					className="w-24 h-24 object-cover rounded-full"
				/>
				<div>
					<h1 className="text-2xl font-bold">{user.name}</h1>
					<p className="text-gray-600">Role: {user.role}</p>
				</div>
			</div>
			<div className="mt-6 space-y-4">
				<p className="text-gray-600">Email: {user.email}</p>
				<p className="text-gray-600">Phone: {user.phone}</p>
			</div>
		</div>
	);
};

export default Profile;
