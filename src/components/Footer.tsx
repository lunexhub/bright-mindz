import { Phone, Mail, MapPin, Globe, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Bright Mindz</h3>
                <p className="text-primary-foreground/70 text-sm">Private Tutors</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transforming students into top performers through expert tutoring. Join 200+ successful students achieving their academic goals.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:0603305319" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={18} className="text-secondary" />
                  060 330 5319
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/27603305319" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={18} className="text-secondary" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                <span>Kempton Park, Johannesburg</span>
              </li>
              <li>
                <a 
                  href="https://www.brightmindz.co.za" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Globe size={18} className="text-secondary" />
                  www.brightmindz.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Bright Mindz Private Tutors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
