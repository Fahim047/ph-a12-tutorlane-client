import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ links }) => {
	return (
		<div className="w-64 shadow-md bg-white dark:bg-gray-800">
			<nav className="flex flex-col p-4">
				<h1 className="text-2xl font-bold text-primary mb-4">
					TutorLane Dashboard
				</h1>
				{links.map((link) => (
					<NavLink
						to={link.path}
						key={link.name}
						className={({ isActive }) =>
							`block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 ${
								isActive ? 'bg-gray-200 dark:bg-gray-700 font-bold' : ''
							}`
						}
						aria-label={`Navigate to ${link.name}`}
					>
						{link.name}
					</NavLink>
				))}
			</nav>
		</div>
	);
};

Sidebar.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
		})
	),
};

export default Sidebar;
