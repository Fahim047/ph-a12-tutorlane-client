import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/google.png';
import Illustration from '../assets/undraw_authentication.svg';
const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
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
		// Add your register logic here
		console.log('Register submitted:', formData);
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
						className="inline-block px-3 py-2 text-neutral bg-darkText rounded-md mb-8"
					>
						Return Home
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

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full py-2.5 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
						>
							Sign Up
						</button>

						{/* Divider */}
						<div className="flex items-center my-6">
							<div className="flex-grow h-px bg-neutral"></div>
							<span className="px-4 text-sm text-subtleText">
								or continue with
							</span>
							<div className="flex-grow h-px bg-neutral"></div>
						</div>

						{/* Google Button */}
						<button
							type="button"
							className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-neutral text-neutral rounded-lg hover:bg-neutral hover:text-darkText transition-colors"
						>
							<img src={GoogleIcon} alt="Google Logo" className="size-6" />
							<span>Continue with Google</span>
						</button>

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
