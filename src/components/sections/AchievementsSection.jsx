import { Globe, Trophy, Users } from 'lucide-react';

const AchievementsSection = () => {
	const achievements = [
		{
			icon: <Trophy className="h-10 w-10 text-primary dark:text-accent" />,
			title: 'Award-Winning Platform',
			description: 'Recognized for excellence in online education.',
		},
		{
			icon: <Globe className="h-10 w-10 text-primary dark:text-accent" />,
			title: 'Global Reach',
			description: 'Students and teachers from over 50 countries.',
		},
		{
			icon: <Users className="h-10 w-10 text-primary dark:text-accent" />,
			title: '1 Million Users',
			description: 'A growing community of passionate learners and educators.',
		},
	];

	return (
		<section className="bg-neutral dark:bg-gray-900 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-4xl font-bold text-darkText dark:text-white mb-8">
					Our Achievements
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{achievements.map((achievement, index) => (
						<div
							key={index}
							className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
						>
							<div className="p-4 bg-primary/10 dark:bg-secondary/10 rounded-full">
								{achievement.icon}
							</div>
							<h3 className="text-lg font-semibold text-darkText dark:text-white">
								{achievement.title}
							</h3>
							<p className="text-subtleText dark:text-gray-300">
								{achievement.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AchievementsSection;
