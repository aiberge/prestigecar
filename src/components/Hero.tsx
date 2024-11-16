import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid md:grid-cols-2 gap-8 h-[calc(100vh-5rem)]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-r-3xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
            alt="Luxury Car"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl font-bold text-white leading-tight"
            >
              Votre voyage<br />commence ici
            </motion.h2>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center p-8 lg:p-16"
        >
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center mb-6"
            >
              <span className="h-1 w-12 bg-[#013298] mr-4" />
              <span className="text-[#013298] font-semibold">PRESTIGE CAR OUJDA</span>
            </motion.div>
            
            <h3 className="text-4xl font-bold text-[#013298] mb-6">
            Location Premium
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            
            Découvrez l'excellence de nos véhicules haut de gamme disponibles à toute heure pour répondre à vos besoins. Une expérience unique alliant liberté, confort et sophistication.

            </p>
            <div className="flex space-x-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center bg-[#013298] text-white px-8 py-4 rounded-full hover:bg-[#048FD7] transition-all"
                onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorez notre flotte
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center border-2 border-[#013298] text-[#013298] px-8 py-4 rounded-full hover:bg-[#013298] hover:text-white transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contactez-nous
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}