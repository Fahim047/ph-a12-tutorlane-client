import {
	BookOpen,
	ChevronDown,
	LogOut,
	Menu,
	Moon,
	Settings,
	Sun,
	User,
	X,
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks';

const Navbar = () => {
	const { darkMode, setDarkMode } = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

	const toggleTheme = () => {
		setDarkMode((prev) => !prev);
	};

	const isAuthenticated = true;
	const userRole = 'student';

	const navItems = [
		{ label: 'Home', to: '/' },
		{ label: 'All Classes', to: '/classes' },
		{ label: 'Teach', to: '/teach' },
	];

	const profileMenuItems = [
		{ label: 'Profile', icon: User, to: '/profile' },
		{ label: 'Dashboard', icon: BookOpen, to: `/${userRole}-dashboard` },
		{ label: 'Settings', icon: Settings, to: '/settings' },
		{ label: 'Logout', icon: LogOut, to: '/logout' },
	];

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo - Left */}
					<div className="flex items-center flex-shrink-0">
						<NavLink
							to="/"
							className="text-2xl font-bold text-primary dark:text-secondary"
						>
							TutorLane
						</NavLink>
					</div>

					{/* Desktop Navigation - Center */}
					<div className="hidden md:flex md:items-center md:justify-center flex-1 px-8">
						<div className="flex space-x-8">
							{navItems.map((item) => (
								<NavLink
									key={item.label}
									to={item.to}
									className={({ isActive }) =>
										`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
											isActive
												? 'text-primary dark:text-secondary bg-neutral dark:bg-gray-800'
												: 'text-darkText dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
										}`
									}
								>
									{item.label}
								</NavLink>
							))}
						</div>
					</div>

					{/* Account Options and Theme Switcher - Right */}
					<div className="hidden md:flex md:items-center space-x-4">
						{/* Theme Switcher */}
						<button
							onClick={toggleTheme}
							className="p-2 rounded-full text-darkText dark:text-gray-300 hover:text-primary dark:hover:text-secondary focus:outline-none"
						>
							{darkMode ? (
								<Sun className="w-6 h-6" />
							) : (
								<Moon className="w-6 h-6" />
							)}
						</button>

						{/* Account Options */}
						{isAuthenticated ? (
							<div className="relative">
								<button
									onClick={toggleProfile}
									className="flex items-center space-x-1 text-darkText dark:text-gray-300 hover:text-primary dark:hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
								>
									<span>Account</span>
									<ChevronDown className="h-4 w-4" />
								</button>

								{isProfileOpen && (
									<div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
										<div className="py-1">
											{profileMenuItems.map((item) => (
												<NavLink
													key={item.label}
													to={item.to}
													className={({ isActive }) =>
														`flex items-center px-4 py-2 text-sm ${
															isActive
																? 'text-primary dark:text-secondary bg-neutral dark:bg-gray-700'
																: 'text-darkText dark:text-gray-300 hover:bg-neutral dark:hover:bg-gray-700'
														}`
													}
													onClick={() => setIsProfileOpen(false)}
												>
													<item.icon className="h-4 w-4 mr-2" />
													{item.label}
												</NavLink>
											))}
										</div>
									</div>
								)}
							</div>
						) : (
							<NavLink
								to="/login"
								className={({ isActive }) =>
									`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
										isActive
											? 'bg-primary/90 text-white'
											: 'bg-primary text-white hover:bg-primary/90'
									}`
								}
							>
								Sign In
							</NavLink>
						)}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-darkText dark:text-gray-300 hover:text-primary dark:hover:text-secondary focus:outline-none"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{navItems.map((item) => (
							<NavLink
								key={item.label}
								to={item.to}
								className={({ isActive }) =>
									`block px-3 py-2 rounded-md text-base font-medium ${
										isActive
											? 'text-primary dark:text-secondary bg-neutral dark:bg-gray-800'
											: 'text-darkText dark:text-gray-300 hover:text-primary dark:hover:text-secondary hover:bg-neutral dark:hover:bg-gray-800'
									}`
								}
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</NavLink>
						))}
						{isAuthenticated && (
							<div className="border-t border-neutral dark:border-gray-700 pt-2">
								{profileMenuItems.map((item) => (
									<NavLink
										key={item.label}
										to={item.to}
										className={({ isActive }) =>
											`flex items-center px-3 py-2 rounded-md text-base font-medium ${
												isActive
													? 'text-primary dark:text-secondary bg-neutral dark:bg-gray-800'
													: 'text-darkText dark:text-gray-300 hover:text-primary dark:hover:text-secondary hover:bg-neutral dark:hover:bg-gray-800'
											}`
										}
										onClick={() => setIsOpen(false)}
									>
										<item.icon className="h-4 w-4 mr-2" />
										{item.label}
									</NavLink>
								))}
							</div>
						)}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
