import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks'; // Assuming useTheme hook is available for theme switching

const Navbar = () => {
	const { darkMode, setDarkMode } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

	const isAuthenticated = true; // Mock authentication status
	const user = { name: 'John Doe', avatar: 'https://via.placeholder.com/40' }; // Mock user data

	const navItems = [
		{ label: 'Home', to: '/' },
		{ label: 'All Classes', to: '/classes' },
		{ label: 'Teach', to: '/teach' },
	];

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const toggleProfileDropdown = () =>
		setIsProfileDropdownOpen(!isProfileDropdownOpen);

	const toggleTheme = () => {
		setDarkMode((prev) => !prev);
	};

	const linkClasses = (isActive) =>
		`px-4 py-2 rounded text-sm font-medium transition-colors ${
			isActive
				? 'text-primary bg-gray-800'
				: 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
		}`;

	return (
		<nav
			className={`fixed w-full top-0 z-50 shadow-md ${
				darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo and Website Name */}
					<NavLink
						to="/"
						className="text-2xl font-bold text-primary transition"
					>
						TutorLane
					</NavLink>

					{/* Desktop Navigation */}
					<div className="hidden md:flex md:space-x-8 items-center">
						{navItems.map((item) => (
							<NavLink
								key={item.label}
								to={item.to}
								className={({ isActive }) => linkClasses(isActive)}
							>
								{item.label}
							</NavLink>
						))}
						{/* Theme Switcher (Desktop) */}
						<button
							onClick={toggleTheme}
							className="flex items-center p-2 rounded-full text-gray-500 hover:text-primary focus:outline-none"
						>
							{darkMode ? (
								<Sun className="w-6 h-6" />
							) : (
								<Moon className="w-6 h-6" />
							)}
						</button>
						{!isAuthenticated ? (
							<NavLink
								to="/login"
								className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
							>
								Sign In
							</NavLink>
						) : (
							<div className="relative">
								{/* Profile Picture */}
								<button
									className="flex items-center space-x-2"
									onClick={toggleProfileDropdown}
								>
									<img
										src={user.avatar}
										alt="User Avatar"
										className="w-8 h-8 rounded-full border-2 border-primary"
									/>
									<ChevronDown className="w-4 h-4" />
								</button>

								{/* Profile Dropdown */}
								{isProfileDropdownOpen && (
									<div
										className={`absolute right-0 mt-2 w-48 bg-${
											darkMode ? 'gray-800' : 'white'
										} rounded shadow-lg`}
									>
										<div
											className={`p-4 text-sm font-medium border-b border-${
												darkMode ? 'gray-600' : 'gray-300'
											}`}
										>
											{user.name}
										</div>
										<NavLink
											to="/dashboard"
											className={`block px-4 py-2 text-sm hover:bg-${
												darkMode ? 'gray-700' : 'gray-100'
											}`}
										>
											Dashboard
										</NavLink>
										<button
											className={`block w-full text-left px-4 py-2 text-sm hover:bg-${
												darkMode ? 'gray-700' : 'gray-100'
											}`}
										>
											Logout
										</button>
									</div>
								)}
							</div>
						)}
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden flex items-center" onClick={toggleMenu}>
						{isMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div
					className={`md:hidden bg-${
						darkMode ? 'gray-900 text-white' : 'white text-darkText'
					}`}
				>
					<div className="px-2 pt-2 pb-3 space-y-1">
						{navItems.map((item) => (
							<NavLink
								key={item.label}
								to={item.to}
								className={({ isActive }) => linkClasses(isActive)}
								onClick={toggleMenu}
							>
								{item.label}
							</NavLink>
						))}
						{/* Theme Switcher (Mobile) */}
						<div className="flex justify-center items-center py-2">
							<button
								onClick={toggleTheme}
								className="p-2 rounded-full text-gray-500 hover:text-primary"
							>
								{darkMode ? (
									<Sun className="w-6 h-6" />
								) : (
									<Moon className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
					{!isAuthenticated ? (
						<NavLink
							to="/login"
							className="block px-4 py-2 bg-primary text-white rounded text-center"
							onClick={toggleMenu}
						>
							Sign In
						</NavLink>
					) : (
						<div className="px-2 pt-2 pb-3 border-t border-gray-600">
							<div className="flex items-center space-x-3 px-3 py-2">
								<img
									src={user.avatar}
									alt="User Avatar"
									className="w-8 h-8 rounded-full border-2 border-primary"
								/>
								<span className="text-sm font-medium">{user.name}</span>
							</div>
							<NavLink
								to="/dashboard"
								className="block px-3 py-2 text-sm hover:bg-gray-800"
								onClick={toggleMenu}
							>
								Dashboard
							</NavLink>
							<button
								className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-800"
								onClick={toggleMenu}
							>
								Logout
							</button>
						</div>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
