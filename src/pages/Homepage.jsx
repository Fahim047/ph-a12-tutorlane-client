import Banner from '../components/Banner/Banner';
import FeedbackSection from '../components/sections/FeedbackSection';
import PopularClasses from '../components/sections/PopularClassesSection';

const Homepage = () => {
	return (
		<div className="w-full">
			<Banner />
			<PopularClasses />
			<FeedbackSection />
		</div>
	);
};

export default Homepage;
