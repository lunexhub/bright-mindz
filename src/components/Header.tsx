import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  onRegisterClick: () => void;
  onBookingClick: () => void;
}

const Header = ({ onRegisterClick, onBookingClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg md:text-xl text-primary">Bright Mindz</h1>
              <p className="text-xs text-muted-foreground -mt-1">Private Tutors</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">Services</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors font-medium">Pricing</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" onClick={onBookingClick} className="font-semibold">
              Free Consultation
            </Button>
            <Button variant="secondary" onClick={onRegisterClick} className="font-bold">
              Get Started Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="flex flex-col gap-2 pt-3">
                <Button variant="outline" onClick={() => { onBookingClick(); setIsMenuOpen(false); }} className="font-semibold">
                  Free Consultation
                </Button>
                <Button variant="secondary" onClick={() => { onRegisterClick(); setIsMenuOpen(false); }} className="font-bold">
                  Get Started Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
