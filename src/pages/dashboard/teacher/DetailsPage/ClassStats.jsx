import PropTypes from 'prop-types';

const ClassStats = ({ stats }) => (
	<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
		<div className="bg-blue-500 text-white p-4 rounded-lg shadow">
			<h2 className="text-lg font-bold">Total Enrollments</h2>
			<p className="text-2xl">{stats?.totalEnrollments}</p>
		</div>
		<div className="bg-green-500 text-white p-4 rounded-lg shadow">
			<h2 className="text-lg font-bold">Total Assignments</h2>
			<p className="text-2xl">{stats?.totalAssignments}</p>
		</div>
		<div className="bg-orange-500 text-white p-4 rounded-lg shadow">
			<h2 className="text-lg font-bold">Total Submissions</h2>
			<p className="text-2xl">{stats?.submissions || 0}</p>
		</div>
	</div>
);
ClassStats.propTypes = {
	stats: PropTypes.shape({
		totalEnrollments: PropTypes.number.isRequired,
		totalAssignments: PropTypes.number.isRequired,
		submissions: PropTypes.number,
	}),
};

export default ClassStats;
