import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import axiosPublic from '../../api/axios';
import LoadingComponent from '../shared/LoadingComponent';

const StatsSection = () => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['websiteStats'],
		queryFn: async () => {
			const response = await axiosPublic.get('/users/website-stats');
			return response.data;
		},
		retry: 1,
	});

	if (isPending) {
		return <LoadingComponent />;
	}

	const { totalUsers = 0, totalClasses = 0, totalEnrollments = 0 } = data || {};

	return (
		<section className="w-full py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				{/* Left: Stats Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
					{/* Total Users */}
					<div className="bg-neutral dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
						<h3 className="text-2xl font-semibold text-primary">
							{totalUsers}
						</h3>
						<p className="text-darkText dark:text-subtleText mt-2">
							Total Users
						</p>
					</div>

					{/* Total Classes */}
					<div className="bg-neutral dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
						<h3 className="text-2xl font-semibold text-primary">
							{totalClasses}
						</h3>
						<p className="text-darkText dark:text-subtleText mt-2">
							Total Classes
						</p>
					</div>

					{/* Total Enrollments */}
					<div className="bg-neutral dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
						<h3 className="text-2xl font-semibold text-primary">
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
						src="https://plus.unsplash.com/premium_photo-1661380797814-d0bcc01342b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
