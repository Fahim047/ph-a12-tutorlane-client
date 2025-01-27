import { useAuth } from '../../hooks';

const UserProfile = () => {
	const { user } = useAuth();
	return (
		<div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
			{/* User Image */}
			<div className="flex items-center justify-center mb-6">
				<img
					src={user.photoURL}
					alt={`${user.displayName}'s profile`}
					className="w-24 h-24 rounded-full border-4 border-primary"
				/>
			</div>

			{/* User Info */}
			<div className="text-center space-y-4">
				<div>
					<h1 className="text-2xl font-bold text-gray-800 dark:text-white">
						{user.displayName}
					</h1>
					<p className="text-gray-500 dark:text-gray-400 capitalize">
						{user.role}
					</p>
				</div>

				<div className="space-y-2">
					<div className="flex items-center justify-center space-x-2">
						<span className="font-medium text-gray-700 dark:text-gray-300">
							Email:
						</span>
						<a
							href={`mailto:${user.email}`}
							className="text-primary hover:underline dark:text-primary-light"
						>
							{user.email}
						</a>
					</div>
					<div className="flex items-center justify-center space-x-2">
						<span className="font-medium text-gray-700 dark:text-gray-300">
							Phone:
						</span>
						<a
							href={`tel:${user.phone}`}
							className="text-primary hover:underline dark:text-primary-light"
						>
							{user.phone || 'N/A'}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
