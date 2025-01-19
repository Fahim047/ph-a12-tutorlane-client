import Banner from '../components/Banner/Banner';
import FeedbackSection from '../components/sections/FeedbackSection';
import PopularClasses from '../components/sections/PopularClassesSection';
import StatsSection from '../components/sections/StatsSection';
import { stats, feedbacks, classes } from '../data/data';
const Homepage = () => {
	return (
		<div className="w-full">
			<Banner />
			<PopularClasses classes={classes} />
			<FeedbackSection feedbacks={feedbacks} />
			<StatsSection stats={stats} />
		</div>
	);
};

export default Homepage;
