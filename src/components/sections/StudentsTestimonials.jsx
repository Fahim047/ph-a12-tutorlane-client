const StudentTestimonialsSection = () => {
	const testimonials = [
		{
			name: 'Sarah Johnson',
			image: 'https://randomuser.me/api/portraits/women/44.jpg',
			title: 'Web Development Bootcamp',
			text: 'This course transformed my career! The content was engaging and easy to follow. Highly recommended.',
		},
		{
			name: 'David Kim',
			image: 'https://randomuser.me/api/portraits/men/34.jpg',
			title: 'Mastering Python',
			text: 'I loved the hands-on projects and the supportive community. It gave me the confidence to apply for programming jobs.',
		},
		{
			name: 'Emily Brown',
			image: 'https://randomuser.me/api/portraits/women/48.jpg',
			title: 'Digital Marketing Essentials',
			text: 'The instructors are amazing, and the material is up-to-date. I’m now running my own campaigns with success!',
		},
	];

	return (
		<section className="bg-neutral dark:bg-gray-900 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center text-darkText dark:text-white mb-8">
					What Students Are Saying
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4"
						>
							<div className="flex items-center space-x-4">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full"
								/>
								<div>
									<p className="text-lg font-semibold text-darkText dark:text-white">
										{testimonial.name}
									</p>
									<p className="text-sm text-subtleText">{testimonial.title}</p>
								</div>
							</div>
							<p className="text-darkText dark:text-gray-300">
								{testimonial.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default StudentTestimonialsSection;
