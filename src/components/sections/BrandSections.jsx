import Marquee from 'react-fast-marquee';
import { partners } from '../../data/data';
const BrandSections = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 py-12">
			<h2 className="text-4xl font-bold dark:text-white text-center mb-8">
				Our Partners
			</h2>
			<Marquee>
				{partners.map((partner) => (
					<div key={partner.id} className="mr-12">
						<img src={partner.image} alt={partner.name} className="w-40" />
					</div>
				))}
			</Marquee>
		</section>
	);
};

export default BrandSections;
