import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function Map() {
  return (
    <section id="contact" className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13123.921463974175!2d-1.9370794128418076!3d34.680445000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7865ee046f9a93%3A0x2842aace537b7cd7!2sLocation%20de%20voiture%20Oujda%20Prestige!5e0!3m2!1sfr!2sma!4v1731680008963!5m2!1sfr!2sma"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
      <AnimatedSection className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-[#013298] mb-6">Contactez-nous</h3>
          
          <div className="space-y-6">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4"
            >
              <MapPin className="text-[#048FD7] flex-shrink-0" />
              <p>Oujda, Maroc</p>
            </motion.div>
            <motion.a 
              href="tel:707096730"
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 hover:text-[#048FD7] transition-colors"
            >
              <Phone className="text-[#048FD7] flex-shrink-0" />
              <p>07 07 09 67 30</p>
            </motion.a>
            <motion.a 
              href="mailto:contact@prestigecar.ma"
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 hover:text-[#048FD7] transition-colors"
            >
              <Mail className="text-[#048FD7] flex-shrink-0" />
              <p>contact@prestigecar.ma</p>
            </motion.a>
            <motion.a
              href="https://wa.me/212707096730 "
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center space-x-2 bg-[#25D366] text-white p-4 rounded-lg mt-4 hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contactez-nous sur WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}