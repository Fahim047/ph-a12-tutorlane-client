import { Facebook, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="py-8">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Logo & About */}
				<div>
					<h2 className="text-2xl font-bold">Tutor Lane</h2>
					<p className="text-gray-400 mt-2">
						Empowering learning through online tutoring.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-lg font-semibold">Quick Links</h3>
					<ul className="mt-2 space-y-2">
						<li>
							<Link to="/" className="hover:text-primary">
								Home
							</Link>
						</li>
						<li>
							<Link to="/classes" className="hover:text-primary">
								Classes
							</Link>
						</li>
						<li>
							<Link to="/about" className="hover:text-primary">
								About
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-primary">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Social Media */}
				<div>
					<h3 className="text-lg font-semibold">Follow Us</h3>
					<div className="flex space-x-4 mt-2">
						<Link href="#" className="text-secondary hover:text-primary">
							<Facebook />
						</Link>
						<Link href="#" className="text-secondary hover:text-primary">
							<Github />
						</Link>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
				&copy; {new Date().getFullYear()} EduPlatform. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
