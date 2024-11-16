import { Car, Clock, UserCheck, Shield, Star, Headphones } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Car,
    title: 'Location de voitures de luxe',
    description: 'Une flotte exclusive de véhicules haut de gamme pour tous vos besoins'
  },
  {
    icon: Clock,
    title: 'Longue durée',
    description: 'Solutions flexibles pour la location longue durée adaptées à vos exigences'
  },
  {
    icon: UserCheck,
    title: 'Chauffeur privé',
    description: 'Service personnalisé avec des chauffeurs professionnels expérimentés'
  },
  {
    icon: Shield,
    title: 'Sécurité garantie',
    description: 'Véhicules régulièrement entretenus et assurance tous risques incluse'
  },
  {
    icon: Star,
    title: 'Service Premium',
    description: 'Une expérience de luxe personnalisée selon vos préférences'
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Une équipe disponible à tout moment pour répondre à vos besoins'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#013298]">Nos Services</h2>
            <div className="mt-4 h-1 w-24 bg-[#048FD7] mx-auto" />
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative p-8 bg-white rounded-2xl shadow-lg transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2"
                >
                  <div className="bg-[#013298] p-4 rounded-full text-white group-hover:bg-[#048FD7] transition-colors duration-300">
                    <service.icon size={32} />
                  </div>
                </motion.div>
                
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}