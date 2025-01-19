import PropTypes from 'prop-types';
import { allClasses as classes } from '../data/data';
const AllClasses = () => {
	return (
		<div className="min-h-screen bg-neutral dark:bg-gray-900 mt-12 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-darkText dark:text-white text-center mb-8">
					All Classes
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{classes.map((classItem) => (
						<ClassCard key={classItem.id} classData={classItem} />
					))}
				</div>
			</div>
		</div>
	);
};

const ClassCard = ({ classData }) => {
	const { title, name, image, price, description, totalEnrollment } = classData;

	return (
		<div className="bg-white border shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
			{/* Image */}
			<div
				className="w-full h-48 bg-cover bg-center"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			{/* Content */}
			<div className="p-4">
				<h2 className="text-xl font-semibold text-darkText truncate">
					{title}
				</h2>
				<p className="text-sm text-subtleText mb-2">by {name}</p>
				<p className="text-sm text-darkText line-clamp-3 mb-4">{description}</p>
				<div className="flex items-center justify-between text-darkText">
					<span className="font-semibold">${price}</span>
					<span className="text-sm text-subtleText">
						{totalEnrollment} Enrolled
					</span>
				</div>
				{/* Enroll Button */}
				<button
					className="w-full mt-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
					onClick={() => handleEnroll(classData.id)}
				>
					Enroll Now
				</button>
			</div>
		</div>
	);
};
ClassCard.propTypes = {
	classData: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		totalEnrollment: PropTypes.number.isRequired,
	}),
};

const handleEnroll = (classId) => {
	alert(`You have enrolled in class ID: ${classId}`);
};

export default AllClasses;
