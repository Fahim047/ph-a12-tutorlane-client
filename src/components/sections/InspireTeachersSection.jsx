import { Link } from 'react-router-dom';

const InspireTeachersSection = () => {
	return (
		<section className="bg-neutral dark:bg-gray-900 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				{/* Left Content */}
				<div className="space-y-6">
					<h2 className="text-4xl font-bold text-darkText dark:text-white leading-tight">
						Empower Students, Share Knowledge
					</h2>
					<p className="text-lg text-subtleText dark:text-gray-300">
						Join our growing community of passionate educators. Shape the future
						by sharing your expertise with eager learners worldwide. Our
						platform provides you with the tools to create, manage, and deliver
						high-quality classes effortlessly.
					</p>
					<ul className="space-y-2">
						<li className="flex items-center">
							<span className="text-primary dark:text-secondary font-semibold mr-2">
								✔
							</span>
							<span className="text-darkText dark:text-gray-300">
								Flexible teaching schedules.
							</span>
						</li>
						<li className="flex items-center">
							<span className="text-primary dark:text-secondary font-semibold mr-2">
								✔
							</span>
							<span className="text-darkText dark:text-gray-300">
								Reach a global audience of learners.
							</span>
						</li>
						<li className="flex items-center">
							<span className="text-primary dark:text-secondary font-semibold mr-2">
								✔
							</span>
							<span className="text-darkText dark:text-gray-300">
								Earn while doing what you love.
							</span>
						</li>
					</ul>
					<Link
						to="/teach"
						className="inline-block px-6 py-3 bg-primary dark:bg-secondary text-white rounded-md shadow-lg hover:bg-primary/90 transition"
					>
						Become a Teacher
					</Link>
				</div>

				{/* Right Image */}
				<div className="flex justify-center">
					<img
						src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Inspiring teachers"
						className="w-full h-[450px] max-w-lg rounded-lg shadow-lg object-scale-down overflow-hidden bg-center"
					/>
				</div>
			</div>
		</section>
	);
};

export default InspireTeachersSection;
