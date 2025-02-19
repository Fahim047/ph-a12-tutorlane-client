import { BookOpen, CheckCircle, User } from 'lucide-react';

const HowItWorksSection = () => {
	const steps = [
		{
			icon: <User className="h-8 w-8 text-primary dark:text-accent" />,
			title: 'Create an Account',
			description: 'Sign up for free and explore our platform.',
		},
		{
			icon: <BookOpen className="h-8 w-8 text-primary dark:text-accent" />,
			title: 'Find or Create Classes',
			description:
				'Students can enroll in classes, and teachers can create new ones.',
		},
		{
			icon: <CheckCircle className="h-8 w-8 text-primary dark:text-accent" />,
			title: 'Achieve Your Goals',
			description:
				'Learn, grow, and make progress towards your academic or teaching goals.',
		},
	];

	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-4xl font-bold text-darkText dark:text-white mb-8">
					How It Works
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<div
							key={index}
							className="flex flex-col items-center space-y-4 bg-neutral dark:bg-gray-800 p-6 rounded-lg shadow-lg"
						>
							<div className="p-4 bg-primary/10 dark:bg-secondary/10 rounded-full">
								{step.icon}
							</div>
							<h3 className="text-lg font-semibold text-darkText dark:text-white">
								{step.title}
							</h3>
							<p className="text-subtleText dark:text-gray-300">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
