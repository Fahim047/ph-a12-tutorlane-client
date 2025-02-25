import Banner from '../components/Banner/Banner';
import AchievementsSection from '../components/sections/AchievementsSection';
import BrandSections from '../components/sections/BrandSections';
import FAQSection from '../components/sections/FAQSection';
import FeedbackSection from '../components/sections/FeedbackSection';
import HowItWorksSection from '../components/sections/HowItWorks';
import InspireTeachersSection from '../components/sections/InspireTeachersSection';
import PopularClasses from '../components/sections/PopularClassesSection';
import StatsSection from '../components/sections/StatsSection';
import StudentTestimonialsSection from '../components/sections/StudentsTestimonials';
import { feedbacks } from '../data/data';
const Homepage = () => {
	return (
		<div className="w-full">
			<Banner />
			<BrandSections />
			<PopularClasses />
			<FeedbackSection feedbacks={feedbacks} />
			<AchievementsSection />
			<StatsSection />
			<InspireTeachersSection />
			<HowItWorksSection />
			<StudentTestimonialsSection />
			<FAQSection />
		</div>
	);
};

export default Homepage;
