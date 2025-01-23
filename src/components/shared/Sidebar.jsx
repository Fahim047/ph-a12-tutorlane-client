import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ links }) => {
	return (
		<div className="w-64 bg-white shadow-md">
			<nav className="flex flex-col p-4">
				{links.map((link) => (
					<NavLink
						to={link.path}
						key={link.name}
						className={({ isActive }) =>
							`block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 ${
								isActive ? 'bg-gray-200 font-bold' : ''
							}`
						}
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
