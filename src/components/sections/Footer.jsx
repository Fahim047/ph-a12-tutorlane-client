import { Facebook, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="border-t border-gray-200 dark:border-gray-700 bg-neutral dark:bg-gray-800 py-8">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Logo & About */}
				<div>
					<h2 className="text-2xl font-bold text-primary">Tutor Lane</h2>
					<p className="mt-2">Empowering learning through online tutoring.</p>
					{/* Copyright */}
					<p className="text-gray-1 mt-2">
						&copy; {new Date().getFullYear()} Tutor Lane. All rights reserved.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-lg font-semibold text-gray-1">Quick Links</h3>
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
					<h3 className="text-lg font-semibold text-gray-1">Follow Us</h3>
					<div className="flex space-x-4 mt-2">
						<Link href="#" className="text-primary hover:scale-110">
							<Facebook />
						</Link>
						<Link href="#" className="text-primary hover:scale-110">
							<Github />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
