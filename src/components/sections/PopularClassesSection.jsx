import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { classes } from '../../data/data';
const PopularClasses = () => {
	return (
		<section className="w-full bg-neutral dark:bg-gray-800 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-darkText dark:text-white text-center mb-8">
					Popular Classes
				</h2>
				<Swiper
					modules={[Pagination, A11y, Autoplay]}
					spaceBetween={20}
					slidesPerView={1}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					breakpoints={{
						640: { slidesPerView: 1, grid: { rows: 1 } },
						768: { slidesPerView: 2, grid: { rows: 1 } },
						1024: { slidesPerView: 3, grid: { rows: 1 } },
					}}
					className="h-[400px]"
				>
					{classes.map((course) => (
						<SwiperSlide key={course.id} className="h-auto">
							<div className="flex flex-col bg-white rounded-lg shadow-md h-full p-4">
								{/* Image Section */}
								<div className="h-40 w-full mb-4">
									<img
										src={course.image}
										alt={course.title}
										className="w-full h-full object-cover rounded-md"
									/>
								</div>
								{/* Content Section */}
								<div className="flex flex-col flex-grow">
									<h3 className="text-xl font-semibold text-darkText mb-2">
										{course.title}
									</h3>
									<p className="text-subtleText mb-4 flex-grow">
										{course.description}
									</p>
									{/* Button Section */}
									<div className="mt-auto">
										<Link
											to={`/classes/${course.id}`}
											className="block w-full text-center px-6 py-3 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition"
										>
											View Details
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default PopularClasses;
