import Banner from '../components/Banner/Banner';
import AchievementsSection from '../components/sections/AchievementsSection';
import FAQSection from '../components/sections/FAQSection';
import FeedbackSection from '../components/sections/FeedbackSection';
import HowItWorksSection from '../components/sections/HowItWorks';
import InspireTeachersSection from '../components/sections/InspireTeachersSection';
import PopularClasses from '../components/sections/PopularClassesSection';
import StatsSection from '../components/sections/StatsSection';
import StudentTestimonialsSection from '../components/sections/StudentsTestimonials';
import { classes, feedbacks, stats } from '../data/data';
const Homepage = () => {
	return (
		<div className="w-full">
			<Banner />
			<PopularClasses classes={classes} />
			<FeedbackSection feedbacks={feedbacks} />

			<AchievementsSection />
			<StatsSection stats={stats} />
			<InspireTeachersSection />
			<HowItWorksSection />
			<StudentTestimonialsSection />
			<FAQSection />
		</div>
	);
};

export default Homepage;
