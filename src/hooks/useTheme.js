import { useContext } from 'react';
import { ThemeContext } from '../contexts';

const useTheme = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);
	return { darkMode, setDarkMode };
};
export default useTheme;
