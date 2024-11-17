import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Map() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#013298]">
        Contact
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Map - 70% width on desktop */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[70%] h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.980367070724!2d-1.9206052880305822!3d34.68044497281395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7865ee046f9a93%3A0x2842aace537b7cd7!2sLocation%20de%20voiture%20Oujda%20Prestige!5e0!3m2!1sfr!2sma!4v1731877429885!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Contact Card - 30% width on desktop */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[30%] bg-white rounded-xl shadow-lg p-6 h-fit"
        >
          <h3 className="text-2xl font-semibold text-[#013298] mb-6">
            Contactez-nous
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#013298]/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-[#013298]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Téléphone</h4>
                <p className="text-gray-600">+212-707 096 730</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#013298]/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-[#013298]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <p className="text-gray-600">contact@prestigecar.ma</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#013298]/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-[#013298]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Adresse</h4>
                <p className="text-gray-600">
                  Oujda, Maroc
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}