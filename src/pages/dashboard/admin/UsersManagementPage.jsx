import { useState } from 'react';

const UsersManagementPage = ({ users, onMakeAdmin }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.email.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
				Manage Users
			</h1>

			{/* Search Bar */}
			<div className="mb-4">
				<input
					type="text"
					value={searchTerm}
					onChange={handleSearch}
					placeholder="Search by name or email"
					className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
				/>
			</div>

			{/* Users Table */}
			<div className="overflow-auto">
				<table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
					<thead className="bg-gray-100 dark:bg-gray-800">
						<tr>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Name
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Email
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Image
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Role
							</th>
							<th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredUsers.map((user) => (
							<tr
								key={user.id}
								className="hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								{/* Name */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									{user.name}
								</td>

								{/* Email */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									{user.email}
								</td>

								{/* Image */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									<img
										src={user.photoURL}
										alt={user.name}
										className="w-10 h-10 rounded-full"
									/>
								</td>
								{/* Role */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									{user.role}
								</td>

								{/* Action */}
								<td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
									<button
										onClick={() => onMakeAdmin(user.id)}
										disabled={user.role === 'admin'}
										className={`px-4 py-2 rounded-lg font-medium ${
											user.role === 'admin'
												? 'bg-gray-400 text-gray-600 cursor-not-allowed'
												: 'bg-primary text-white hover:bg-primary-dark'
										}`}
									>
										{user.role === 'admin' ? 'Admin' : 'Make Admin'}
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UsersManagementPage;
