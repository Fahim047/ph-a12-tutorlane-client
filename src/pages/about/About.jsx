const About = () => {
	return (
		<div className="mt-12">
			{/* Hero Section */}
			<section className="text-center py-16 bg-gradient-to-b from-primary/10 via-transparent to-transparent">
				<h1 className="text-5xl font-extrabold text-primary">About Us</h1>
				<p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
					Empowering learning through technology — one connection at a time.
				</p>
			</section>

			{/* Mission & Vision */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
						<h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
						<p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
							To provide an interactive and inclusive learning platform that
							bridges the gap between students and educators worldwide.
						</p>
					</div>
					<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
						<h2 className="text-2xl font-semibold text-primary">Our Vision</h2>
						<p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
							Revolutionizing education through technology — with seamless class
							management, real-time feedback, and personalized learning
							experiences.
						</p>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="bg-gray-50 dark:bg-gray-900 py-16">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
						Why Choose TutorLane?
					</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						{`We're built for curious minds and passionate educators. Here’s what
						sets us apart.`}
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-12">
						{[
							{
								title: 'Interactive Learning',
								desc: 'Engaging courses with assignments, quizzes, and real-time feedback.',
							},
							{
								title: 'Expert Teachers',
								desc: 'Learn from passionate educators with proven experience and impact.',
							},
							{
								title: 'Student-Centric Design',
								desc: 'Seamless UX, personalized feedback, and easy access to resources.',
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
							>
								<h3 className="text-xl font-semibold text-primary">
									{item.title}
								</h3>
								<p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Optional: Meet the Team */}
			{/* You can enable this later with real data and images */}
			{/* 
			<section className="max-w-7xl mx-auto px-6 py-20 text-center">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-white">
					Meet the Team
				</h2>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					We’re a passionate group of developers, designers, and educators.
				</p>

				<div className="grid md:grid-cols-3 gap-10 mt-12">
					{[...].map((member) => (
						<div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
							<img
								src={member.image}
								alt={member.name}
								className="w-20 h-20 rounded-full mx-auto border-4 border-primary"
							/>
							<h3 className="text-xl font-bold mt-4">{member.name}</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
						</div>
					))}
				</div>
			</section>
			*/}
		</div>
	);
};

export default About;
