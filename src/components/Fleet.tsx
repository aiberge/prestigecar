import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const cars = [
  {
    id: 1,
    name: 'Dacia Logan',
    image: '/logan.webp', 
    price: '349 DH/jour',
    features: ['Boîte manuelle', 'Diesel', '5 places confortables', 'Coffre 310L'],
  },
  {
    id: 2,
    name: 'Dacia Stepway',
    image: '/stepway.webp',
    price: '349 DH/jour', 
    features: ['Boîte manuelle', 'Essence', '5 places confortables', 'Coffre 320L'],
  },
  {
    id: 3,
    name: 'Clio 5',
    image: '/clio24.jpg',
    price: '399 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 391L'],
  },
  {
    id: 4,
    name: 'Peugeot 208',
    image: '/208.jpeg',
    price: '349 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 311L'],
  },
  {
    id: 5,
    name: 'Dacia Duster',
    image: '/duster.jpg',
    price: '349 DH/jour',
    features: ['Boîte manuelle', 'Diesel', '5 places confortables', 'Coffre 478L'],
  },
  {
    id: 6,
    name: 'Peugeot C-Elysée',
    image: '/Clise.jpg',
    price: '399 DH/jour',
    features: ['Boîte manuelle', 'Essence', '5 places confortables', 'Coffre 506L'],
  },
  {
    id: 7,
    name: 'T-Roc',
    image: '/te.jpg',
    price: '799 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 445L'],
  },
  {
    id: 8,
    name: 'Range Rover Velar',
    image: '/range.jpg',
    price: '999 DH/jour',
    features: ['Boîte automatique', 'Diesel', '5 places confortables', 'Coffre 632L'],
  },
  {
    id: 9,
    name: 'Golf 8',
    image: '/8.jpg',
    price: '799 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 380L'],
  },
  {
    id: 10,
    name: 'Hyundai Accent',
    image: '/accent.png',
    price: '449 DH/jour',
    features: ['Boîte manuelle', 'Essence', '5 places confortables', 'Coffre 387L'],
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#013298]">Notre Flotte</h2>
            <div className="mt-4 h-1 w-24 bg-[#048FD7] mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{car.name}</h3>
                    <p className="text-white/90">{car.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#048FD7] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-[#013298] text-white py-3 rounded-lg hover:bg-[#048FD7] transition-colors"
                    onClick={() => window.open('https://wa.me/212707096730 ', '_blank')}
                  >
                    Réserver maintenant
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}