import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success('Message sent successfully!');
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<div className="mt-12">
			{/* Hero Section */}
			<section className="text-center py-16 bg-gradient-to-b from-primary/10 via-transparent to-transparent">
				<h1 className="text-5xl font-extrabold text-primary">Contact Us</h1>
				<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
					We&apos;d love to hear from you — reach out anytime.
				</p>
			</section>

			{/* Contact Form & Info */}
			<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
				{/* Contact Form */}
				<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
					<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
						Send a Message
					</h2>
					<form onSubmit={handleSubmit} className="space-y-5">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
							required
						/>
						<textarea
							name="message"
							rows="4"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
							required
						/>
						<button
							type="submit"
							className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Contact Info */}
				<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
					<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
						Reach Us At
					</h2>
					<ul className="space-y-6 text-gray-700 dark:text-gray-300">
						<li className="flex items-start space-x-4">
							<MapPin className="text-primary" />
							<span>Narangai, Manikganj, Dhaka</span>
						</li>
						<li className="flex items-start space-x-4">
							<Mail className="text-primary" />
							<span>support@tutorlane.com</span>
						</li>
						<li className="flex items-start space-x-4">
							<Phone className="text-primary" />
							<span>+8801521578288</span>
						</li>
					</ul>
				</div>
			</section>

			{/* Google Map */}
			<section className="w-full h-80 overflow-hidden rounded-xl px-6 pb-16">
				<iframe
					className="w-full h-full rounded-xl border-0"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093145!2d144.95373531531786!3d-37.81627974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1c7abbb%3A0x5045675218ce6e0!2s123+Main+Street%2C+Melbourne+VIC!5e0!3m2!1sen!2sau!4v1633576032754!5m2!1sen!2sau"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			</section>
		</div>
	);
};

export default ContactUs;
