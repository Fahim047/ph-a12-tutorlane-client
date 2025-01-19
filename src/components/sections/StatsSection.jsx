import PropTypes from 'prop-types';

const StatsSection = ({ stats }) => {
	const { totalUsers, totalClasses, totalEnrollments } = stats;

	return (
		<section className="w-full py-12 bg-neutral dark:bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				{/* Left: Stats Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
					{/* Total Users */}
					<div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center">
						<h3 className="text-2xl font-semibold text-primary dark:text-accent">
							{totalUsers}
						</h3>
						<p className="text-darkText dark:text-subtleText mt-2">
							Total Users
						</p>
					</div>

					{/* Total Classes */}
					<div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center">
						<h3 className="text-2xl font-semibold text-primary dark:text-accent">
							{totalClasses}
						</h3>
						<p className="text-darkText dark:text-subtleText mt-2">
							Total Classes
						</p>
					</div>

					{/* Total Enrollments */}
					<div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center">
						<h3 className="text-2xl font-semibold text-primary dark:text-accent">
							{totalEnrollments}
						</h3>
						<p className="text-darkText dark:text-subtleText mt-2">
							Total Enrollments
						</p>
					</div>
				</div>

				{/* Right: Image */}
				<div className="flex justify-center">
					<img
						src="https://placehold.co/600x400?text=Learning+Illustration"
						alt="Learning Illustration"
						className="w-full max-w-md rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};
StatsSection.propTypes = {
	stats: PropTypes.shape({
		totalUsers: PropTypes.number.isRequired,
		totalClasses: PropTypes.number.isRequired,
		totalEnrollments: PropTypes.number.isRequired,
	}).isRequired,
};

export default StatsSection;
