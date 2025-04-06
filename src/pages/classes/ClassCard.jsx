import { Users } from 'lucide-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ classData }) => {
	const navigate = useNavigate();
	const {
		id,
		title,
		teacherName,
		thumbnail,
		price,
		description,
		totalEnrollments,
	} = classData;

	return (
		<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-200 dark:border-gray-700">
			{/* Thumbnail */}
			<div className="relative h-48 overflow-hidden">
				<img
					src={thumbnail}
					alt={title}
					className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
				/>
				{/* Enrollments Badge */}
				<div className="absolute top-3 left-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm text-gray-800 dark:text-gray-200">
					<Users size={16} className="text-primary" />
					<span>{totalEnrollments}</span>
				</div>
			</div>

			{/* Content */}
			<div className="p-5 flex flex-col flex-grow">
				<h2 className="text-lg font-bold text-darkText dark:text-white line-clamp-1">
					{title}
				</h2>
				<p className="text-sm text-subtleText dark:text-gray-400 mb-2">
					by {teacherName}
				</p>
				<p className="text-sm text-gray-600 dark:text-gray-300 flex-grow line-clamp-3">
					{description}
				</p>
			</div>

			{/* Footer */}
			<div className="px-5 pb-5 mt-auto">
				<div className="flex items-center justify-between mb-4">
					<span className="text-lg font-semibold text-primary">${price}</span>
					{/* Optional: more info link or rating */}
				</div>
				<button
					onClick={() => navigate(`/classes/${id}`)}
					className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition"
				>
					Enroll Now
				</button>
			</div>
		</div>
	);
};

ClassCard.propTypes = {
	classData: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		teacherName: PropTypes.string.isRequired,
		thumbnail: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		totalEnrollments: PropTypes.number.isRequired,
	}).isRequired,
};

export default ClassCard;
