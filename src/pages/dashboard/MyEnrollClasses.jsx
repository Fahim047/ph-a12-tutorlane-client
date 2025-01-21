import { Link } from 'react-router-dom';

const MyEnrollClasses = () => {
	const classes = [
		{
			id: 1,
			title: 'Mathematics for Beginners',
			name: 'John Doe',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 2,
			title: 'Introduction to Chemistry',
			name: 'Jane Smith',
			image: 'https://via.placeholder.com/150',
		},
	];

	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">My Enrolled Classes</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{classes.map((cls) => (
					<div
						key={cls.id}
						className="bg-white rounded-lg shadow-md p-4 flex flex-col"
					>
						<img
							src={cls.image}
							alt={cls.title}
							className="w-full h-40 object-cover rounded-md mb-4"
						/>
						<h2 className="text-lg font-semibold">{cls.title}</h2>
						<p className="text-sm text-gray-600 mb-4">By {cls.name}</p>
						<Link
							to={`/dashboard/my-enroll-class/${cls.id}`}
							className="mt-auto inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
						>
							Continue
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyEnrollClasses;
