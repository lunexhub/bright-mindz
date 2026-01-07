import { Button } from "@/components/ui/button";
import { Star, Users, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

interface HeroProps {
  onRegisterClick: () => void;
  onBookingClick: () => void;
}

const Hero = ({ onRegisterClick, onBookingClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 md:px-4 py-2 mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-secondary fill-secondary flex-shrink-0" />
            <span className="text-primary-foreground text-xs md:text-sm font-semibold">
              <span className="hidden sm:inline">Proven Results • </span>200+ Students • 5★ Rated
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            Transform Your Child Into a <span className="text-gradient">Top Performer</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Expert tutoring that turns struggling students into confident achievers. Personalized attention, proven results, and flexible learning options.
          </p>
          
          {/* Value Proposition */}
          <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-2xl font-semibold animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Join 200+ students already achieving their academic goals
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button variant="hero" size="xl" onClick={onRegisterClick} className="text-base md:text-lg font-bold w-full sm:w-auto">
              Start Your Success Journey →
            </Button>
            <Button variant="heroOutline" size="xl" onClick={onBookingClick} className="text-base md:text-lg font-bold w-full sm:w-auto">
              Book Free Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">200+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Happy Students</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <GraduationCap className="w-5 h-5 text-secondary" />
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">15+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Expert Tutors</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">5★</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
