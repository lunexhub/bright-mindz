import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<"register" | "booking">("register");

  const handleRegisterClick = () => {
    setFormType("register");
    setIsFormOpen(true);
  };

  const handleBookingClick = () => {
    setFormType("booking");
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onRegisterClick={handleRegisterClick} onBookingClick={handleBookingClick} />
      <Hero onRegisterClick={handleRegisterClick} onBookingClick={handleBookingClick} />
      <Services />
      <Gallery />
      <Pricing onRegisterClick={handleRegisterClick} />
      <Footer />
      <FloatingContact />
      <RegistrationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        formType={formType}
      />
    </div>
  );
};

export default Index;
