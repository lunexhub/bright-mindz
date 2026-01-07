import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const phoneNumber = "27603305319";
  
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
      
      {/* Phone Call Button */}
      <a
        href={`tel:+${phoneNumber}`}
        className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Call us"
      >
        <Phone size={26} />
      </a>
    </div>
  );
};

export default FloatingContact;
