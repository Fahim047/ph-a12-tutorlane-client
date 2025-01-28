import { useNavigate } from 'react-router-dom';
import { enrolledClasses as classes } from '../../../data/data';
const MyEnrolledClasses = () => {
	const navigate = useNavigate();
	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">My Enrolled Classes</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{classes.map((classItem) => (
					<div
						key={classItem.id}
						className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800"
					>
						<img
							src={classItem.image}
							alt={classItem.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-4">
							<h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
								{classItem.title}
							</h2>
							<p className="text-gray-600 dark:text-gray-400">
								By: {classItem.teacherName}
							</p>
							<button
								className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
								onClick={() => navigate(`${classItem.id}`)}
							>
								Continue
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyEnrolledClasses;
