import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ classData }) => {
	const navigate = useNavigate();
	const {
		title,
		teacherName,
		thumbnail,
		price,
		description,
		totalEnrollments,
	} = classData;

	return (
		<div className="bg-neutral dark:bg-gray-800 border shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
			{/* Image */}
			<div
				className="w-full h-48 bg-cover bg-center"
				style={{ backgroundImage: `url(${thumbnail})` }}
			></div>
			{/* Content */}
			<div className="p-4 flex flex-col flex-grow">
				<h2 className="text-xl font-semibold text-primary truncate">{title}</h2>
				<p className="text-sm mb-2">by {teacherName}</p>
				<p className="text-subtleText line-clamp-3 mb-4 flex-grow">
					{description}
				</p>
				<div className="flex items-center justify-between text-darkText">
					<span className="font-semibold text-primary">${price}</span>
					<span className="text-sm text-subtleText">
						{totalEnrollments} Enrolled
					</span>
				</div>
				{/* Enroll Button */}
				<button
					className="w-full mt-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
					onClick={() => navigate(`/classes/${classData.id}`)}
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
		teacherEmail: PropTypes.string.isRequired,
		thumbnail: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		totalEnrollments: PropTypes.number.isRequired,
	}),
};

export default ClassCard;
