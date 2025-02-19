const About = () => {
	return (
		<div className="mt-12">
			{/* Hero Section */}
			<section className="text-center py-12">
				<h1 className="text-4xl font-bold text-primary">About Us</h1>
				<p className="mt-2 text-lg text-darkText dark:text-gray-500">
					Empowering learning through technology
				</p>
			</section>

			{/* Mission & Vision */}
			<section className="max-w-5xl mx-auto px-6 py-12">
				<div className="grid md:grid-cols-2 gap-8">
					<div>
						<h2 className="text-2xl font-semibold">Our Mission</h2>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							We aim to provide an interactive and accessible learning platform
							that connects students and teachers worldwide.
						</p>
					</div>
					<div>
						<h2 className="text-2xl font-semibold">Our Vision</h2>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							To revolutionize online education with seamless class management,
							engaging assignments, and real-time feedback.
						</p>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-12">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-semibold">Why Choose Us?</h2>
					<div className="grid md:grid-cols-3 gap-6 mt-8">
						<div className="p-6 border rounded-lg shadow-md">
							<h3 className="text-xl font-bold">Interactive Learning</h3>
							<p className="mt-2 text-gray-600 dark:text-gray-300">
								Engaging courses with assignments, quizzes, and feedback.
							</p>
						</div>
						<div className="p-6 border rounded-lg shadow-md">
							<h3 className="text-xl font-bold">Expert Teachers</h3>
							<p className="mt-2 text-gray-600 dark:text-gray-300">
								Learn from experienced educators with diverse expertise.
							</p>
						</div>
						<div className="p-6 border rounded-lg shadow-md">
							<h3 className="text-xl font-bold">Student-Centric</h3>
							<p className="mt-2 text-gray-600 dark:text-gray-300">
								Personalized feedback and easy access to learning materials.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Meet the Team (Optional) */}
			{/* <section className="max-w-7xl mx-auto px-6 py-12 text-center">
				<h2 className="text-3xl font-semibold">Meet Our Team</h2>
				<p className="mt-2 text-gray-600 dark:text-gray-300">
					A dedicated group of developers and educators making learning
					seamless.
				</p>
				<div className="grid md:grid-cols-3 gap-8 mt-8">
					<div className="p-6 border rounded-lg shadow-md">
						<img
							src="/team1.jpg"
							alt="Team Member"
							className="w-20 h-20 rounded-full mx-auto"
						/>
						<h3 className="text-xl font-bold mt-2">John Doe</h3>
						<p className="text-gray-600 dark:text-gray-300">
							Full Stack Developer
						</p>
					</div>
					<div className="p-6 border rounded-lg shadow-md">
						<img
							src="/team2.jpg"
							alt="Team Member"
							className="w-20 h-20 rounded-full mx-auto"
						/>
						<h3 className="text-xl font-bold mt-2">Jane Smith</h3>
						<p className="text-gray-600 dark:text-gray-300">UI/UX Designer</p>
					</div>
					<div className="p-6 border rounded-lg shadow-md">
						<img
							src="/team3.jpg"
							alt="Team Member"
							className="w-20 h-20 rounded-full mx-auto"
						/>
						<h3 className="text-xl font-bold mt-2">Mark Johnson</h3>
						<p className="text-gray-600 dark:text-gray-300">
							Education Specialist
						</p>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default About;
