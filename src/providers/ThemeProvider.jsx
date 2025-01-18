import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { ThemeContext } from '../contexts';

const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(true);
	const themeData = useMemo(
		() => ({ darkMode, setDarkMode }),
		[darkMode, setDarkMode]
	);
	return (
		<ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
	);
};
ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ThemeProvider;
