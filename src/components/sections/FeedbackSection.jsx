import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const FeedbackSection = ({ feedbacks }) => {
	return (
		<section className="w-full py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-darkText dark:text-white text-center mb-8">
					What Teachers Are Saying
				</h2>
				<Swiper
					modules={[Navigation, Pagination, Autoplay, A11y]}
					spaceBetween={20}
					slidesPerView={1}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="h-[300px]"
				>
					{feedbacks.map((feedback) => (
						<SwiperSlide key={feedback.id}>
							<div className="flex flex-col bg-neutral dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
								{/* User Image */}
								<div className="flex justify-center mb-4">
									<img
										src={feedback.image}
										alt={feedback.name}
										className="w-20 h-20 rounded-full object-cover shadow-md"
									/>
								</div>
								{/* Feedback Content */}
								<div className="text-center">
									<p className="text-gray-1 italic mb-4">
										{`"${feedback.text}"`}
									</p>
									<h3 className="text-xl font-bold dark:text-primary">
										{feedback.name}
									</h3>
									<p>{feedback.title}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
FeedbackSection.propTypes = {
	feedbacks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		})
	),
}.isRequired;

export default FeedbackSection;
