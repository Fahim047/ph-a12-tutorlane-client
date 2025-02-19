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
			<section className="text-center py-16">
				<h1 className="text-4xl font-bold text-primary">Contact Us</h1>
				<p className="mt-2 text-lg text-gray-500">
					We&apos;d love to hear from you
				</p>
			</section>

			{/* Contact Form & Info */}
			<div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
				{/* Contact Form */}
				<div className="bg-neutral dark:bg-gray-800 p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-center">Get in Touch</h2>
					<form onSubmit={handleSubmit} className="mt-4 space-y-4">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							className="w-full p-3 border rounded-md dark:bg-gray-700"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-3 border rounded-md dark:bg-gray-700"
							required
						/>
						<textarea
							name="message"
							rows="4"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							className="w-full p-3 border rounded-md dark:bg-gray-700"
							required
						/>
						<button
							type="submit"
							className="w-full bg-primary hover:bg-primary/80 text-white p-3 rounded-md font-semibold"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Contact Information */}
				<div className="bg-neutral dark:bg-gray-800 p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-center">Contact Info</h2>
					<div className="mt-4 space-y-4">
						<p className="flex items-center space-x-3">
							<span className="text-blue-600 text-xl">📍</span>
							<span>Narangai, Manikganj, Dhaka</span>
						</p>
						<p className="flex items-center space-x-3">
							<span className="text-blue-600 text-xl">📧</span>
							<span>support@tutorlane.com</span>
						</p>
						<p className="flex items-center space-x-3">
							<span className="text-xl">📞</span>
							<span>+8801521578288</span>
						</p>
					</div>
				</div>
			</div>

			{/* Google Map (Optional) */}
			<section className="w-full h-80">
				<iframe
					className="w-full h-full"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093145!2d144.95373531531786!3d-37.81627974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1c7abbb%3A0x5045675218ce6e0!2s123+Main+Street%2C+Melbourne+VIC!5e0!3m2!1sen!2sau!4v1633576032754!5m2!1sen!2sau"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			</section>
		</div>
	);
};

export default ContactUs;
