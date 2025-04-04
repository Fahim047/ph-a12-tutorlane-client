import { useState } from 'react';

const FAQSection = () => {
	const faqs = [
		{
			question: 'How do I sign up as a teacher?',
			answer:
				'Click on the "Join as a Teacher" button and follow the registration process. It only takes a few minutes!',
		},
		{
			question: 'Are the classes live or pre-recorded?',
			answer:
				'Our platform supports both live and pre-recorded classes, allowing flexibility for students and teachers.',
		},
		{
			question: 'Is there a fee to join?',
			answer:
				'Students pay for classes, but registration for teachers is completely free!',
		},
		{
			question: 'Can I enroll in multiple classes?',
			answer:
				'Yes! You can enroll in as many classes as you want to enhance your skills.',
		},
	];

	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-16">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-darkText dark:text-white mb-8 text-center">
					Frequently Asked Questions
				</h2>
				<div className="space-y-6">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-neutral dark:bg-gray-800 rounded-lg shadow-lg p-6"
						>
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => toggleFAQ(index)}
							>
								<h3 className="text-lg font-medium text-darkText dark:text-white">
									{faq.question}
								</h3>
								<span className="text-primary dark:text-accent">
									{openIndex === index ? '-' : '+'}
								</span>
							</div>
							{openIndex === index && (
								<p className="mt-4 text-subtleText dark:text-gray-300">
									{faq.answer}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
