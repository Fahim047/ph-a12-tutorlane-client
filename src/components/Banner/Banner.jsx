import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<section className="w-full relative bg-neutral h-screen flex items-center">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
				}}
			></div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Content */}
			<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
				<h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6">
					Welcome to TutorLane
				</h1>
				<p className="text-lg sm:text-xl text-white/90 mb-8">
					Empowering education through collaboration. Join us now!
				</p>
				<Link
					to="/classes"
					className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-md shadow-lg hover:opacity-90 transition-opacity"
				>
					Explore Now
				</Link>
			</div>
		</section>
	);
};

export default Banner;
