import { ChevronLeft, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GoogleIcon from '../assets/google.png';
import Illustration from '../assets/undraw_authentication.svg';
const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your login logic here
		console.log('Login submitted:', formData);
	};

	const handleGoogleLogin = () => {
		// Add Google Login logic here
		console.log('Google login clicked');
	};

	return (
		<div className="min-h-screen flex">
			{/* Left side - Illustration */}
			<div className="hidden lg:flex lg:w-1/2 bg-primary/5 items-center justify-center p-12">
				<div className="max-w-lg">
					<img
						src={Illustration}
						alt="Sign In Illustration"
						className="w-full h-40 rounded-2xl bg-cover"
					/>
					<div className="mt-8 text-center">
						<h2 className="text-2xl font-bold text-primary mb-2">
							Welcome to TutorLane
						</h2>
						<p className="text-subtleText">
							Unlock your learning potential with our expert tutors
						</p>
					</div>
				</div>
			</div>

			{/* Right side - Login Form */}
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
							Welcome Back!
						</h1>
						<p className="text-subtleText">
							Please enter your details to sign in
						</p>
					</div>
					<form onSubmit={handleSubmit} className="space-y-4">
						{/* Email Input */}
						<div className="space-y-2">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-subtleText"
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
									className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-subtleText bg-white"
									placeholder="Enter your email"
									required
								/>
							</div>
						</div>

						{/* Password Input */}
						<div className="space-y-2">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-subtleText"
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
									className="w-full pl-10 pr-12 py-2.5 rounded-lg border border-neutral focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-subtleText bg-white"
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

						{/* Remember me and Forgot password */}
						<div className="flex items-center justify-end">
							<NavLink
								to="/forgot-password"
								className="text-sm text-primary hover:text-primary/80"
							>
								Forgot password?
							</NavLink>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full py-2.5 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
						>
							Sign in
						</button>
						{/* Divider */}
						<div className="flex items-center my-6">
							<div className="flex-grow h-px bg-neutral"></div>
							<span className="px-4 text-sm text-subtleText">or</span>
							<div className="flex-grow h-px bg-neutral"></div>
						</div>
						{/* Google Login Button */}
						<div className="mb-6">
							<button
								onClick={handleGoogleLogin}
								type="button"
								className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-neutral text-neutral rounded-lg hover:bg-neutral hover:text-darkText transition-colors"
							>
								<img src={GoogleIcon} alt="Google Logo" className="size-6" />
								<span>Continue with Google</span>
							</button>
						</div>

						{/* Sign up link */}
						<p className="text-center text-sm text-subtleText">
							Don&apos;t have an account?{' '}
							<NavLink
								to="/signup"
								className="text-primary hover:text-primary/80 font-medium"
							>
								Sign up now
							</NavLink>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
