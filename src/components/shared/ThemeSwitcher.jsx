import { Moon, Sun } from 'lucide-react';
import PropTypes from 'prop-types';

const ThemeSwitcher = ({ darkMode, toggleTheme }) => {
	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full text-gray-500 hover:text-primary"
		>
			{darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
		</button>
	);
};
ThemeSwitcher.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	toggleTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
