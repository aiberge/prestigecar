import { Facebook, Instagram, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#013298] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-bold mb-6">Prestige Car</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="flex-shrink-0" />
                <p>Oujda, Maroc</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="flex-shrink-0" />
                <p>07 07 09 67 30</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="flex-shrink-0" />
                <p>contact@prestigecar.ma</p>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="flex-shrink-0" />
                <a href="https://wa.me/212707096730 " target="_blank" rel="noopener noreferrer">
                  +212 707-096-730
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold mb-4">Navigation</h5>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-[#048FD7] transition-colors">Accueil</a></li>
                <li><a href="/fleet" className="hover:text-[#048FD7] transition-colors">Notre Flotte</a></li>
                <li><a href="/services" className="hover:text-[#048FD7] transition-colors">Services</a></li>
                <li><a href="/about" className="hover:text-[#048FD7] transition-colors">À Propos</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Suivez-nous</h5>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#048FD7] transition-colors">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-[#048FD7] transition-colors">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Prestige Car. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}