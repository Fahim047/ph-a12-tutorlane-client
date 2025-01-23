import {
	ChevronLeft,
	Eye,
	EyeOff,
	Link2,
	Lock,
	Mail,
	User,
} from 'lucide-react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Illustration from '../assets/undraw_authentication.svg';
import { useAuth } from '../hooks';
import { validatePassword } from '../utils/validatePassword';
const RegisterPage = () => {
	const { user, createUser, handleUpdateProfile, handleLogout } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		photoURL: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	if (user) {
		return <Navigate to="/" />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		const { email, password, confirmPassword, name, photoURL } = formData;
		const passwordErrors = validatePassword(password, confirmPassword);
		if (passwordErrors.length > 0) {
			setError(`${passwordErrors.join(', ')}`);
			setIsLoading(false);
			return;
		}

		try {
			await createUser(email, password);
			await handleUpdateProfile({ displayName: name, photoURL });
			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/users`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, photoURL, name }),
				}
			);
			console.log(response);
			await handleLogout();
			toast.success('Registration successful.');
			navigate('/login');
		} catch (err) {
			setError('Something went wrong!');
			console.error('Registration error:', err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="min-h-screen flex">
			{/* Left side - Illustration */}
			<div className="hidden lg:flex lg:w-1/2 bg-primary/5 items-center justify-center p-12">
				<div className="max-w-lg">
					<img
						src={Illustration}
						alt="Sign Up Illustration"
						className="w-full h-40 rounded-2xl bg-cover"
					/>
					<div className="mt-8 text-center">
						<h2 className="text-2xl font-bold text-primary mb-2">
							Join TutorLane Today
						</h2>
						<p className="text-subtleText">
							Start your journey as a student or teacher with us.
						</p>
					</div>
				</div>
			</div>

			{/* Right side - Register Form */}
			<div className="flex-1 flex items-center justify-center p-8">
				<div className="w-full max-w-md">
					<Link
						to="/"
						className="w-fit flex gap-1 items-center text-neutral rounded-md mb-8 hover:text-subtleText transition-colors"
					>
						<ChevronLeft size={24} />
						Home
					</Link>
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-primary mb-2">
							Create Account
						</h1>
						<p className="text-subtleText">
							Please fill in the details to create an account
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Name Input */}
						<div className="space-y-2">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-darkText"
							>
								Name
							</label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-subtleText" />
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-darkText bg-white"
									placeholder="Enter your name"
									required
								/>
							</div>
						</div>

						{/* Email Input */}
						<div className="space-y-2">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-darkText"
							>
								Email
							</label>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-subtleText" />
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-darkText bg-white"
									placeholder="Enter your email"
									required
								/>
							</div>
						</div>
						{/* Photo Input */}
						<div className="space-y-2">
							<label
								htmlFor="photoURL"
								className="block text-sm font-medium text-darkText"
							>
								Avatar URL
							</label>
							<div className="relative">
								<Link2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-subtleText" />
								<input
									type="url"
									id="photoURL"
									name="photoURL"
									value={formData.photoURL}
									onChange={handleChange}
									className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-darkText bg-white"
									placeholder="Enter your avatar URL"
									required
								/>
							</div>
						</div>

						{/* Password Input */}
						<div className="space-y-2">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-darkText"
							>
								Password
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-subtleText" />
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									name="password"
									value={formData.password}
									onChange={handleChange}
									className="w-full pl-10 pr-12 py-2.5 rounded-lg border border-neutral focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-darkText bg-white"
									placeholder="Enter your password"
									required
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2"
								>
									{showPassword ? (
										<EyeOff className="h-5 w-5 text-subtleText hover:text-darkText" />
									) : (
										<Eye className="h-5 w-5 text-subtleText hover:text-darkText" />
									)}
								</button>
							</div>
						</div>
						{/* Confirm Password Input */}
						<div className="space-y-2">
							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-darkText"
							>
								Confirm Password
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-subtleText" />
								<input
									type={showConfirmPassword ? 'text' : 'password'}
									id="confirmPassword"
									name="confirmPassword"
									value={formData.confirmPassword}
									onChange={handleChange}
									className="w-full pl-10 pr-12 py-2.5 rounded-lg border border-neutral focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-darkText bg-white"
									placeholder="Enter your password"
									required
								/>
								<button
									type="button"
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2"
								>
									{showConfirmPassword ? (
										<EyeOff className="h-5 w-5 text-subtleText hover:text-darkText" />
									) : (
										<Eye className="h-5 w-5 text-subtleText hover:text-darkText" />
									)}
								</button>
							</div>
						</div>

						{/* Error Message */}
						{error && <p className="text-red-500 mt-2">{error}</p>}

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full py-2.5 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
						>
							{isLoading ? 'Signing up...' : 'Sign Up'}
						</button>

						{/* Divider */}
						{/* <div className="flex items-center my-6">
							<div className="flex-grow h-px bg-neutral"></div>
							<span className="px-4 text-sm text-subtleText">
								or continue with
							</span>
							<div className="flex-grow h-px bg-neutral"></div>
						</div> */}

						{/* Google Button */}
						{/* <button
							type="button"
							className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-neutral text-neutral rounded-lg hover:bg-neutral hover:text-darkText transition-colors"
						>
							<img src={GoogleIcon} alt="Google Logo" className="size-6" />
							<span>Continue with Google</span>
						</button> */}

						{/* Login link */}
						<p className="text-center text-sm text-subtleText">
							Already have an account?{' '}
							<Link
								to="/login"
								className="text-primary hover:text-primary/80 font-medium"
							>
								Log in here
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
