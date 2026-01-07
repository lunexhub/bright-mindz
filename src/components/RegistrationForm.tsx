import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: "register" | "booking";
}

const RegistrationForm = ({ isOpen, onClose, formType }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: formType === "register" ? "Registration Successful!" : "Booking Request Sent!",
      description: "We'll contact you shortly to confirm the details.",
    });
    
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="hero-gradient p-6 rounded-t-2xl">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <h2 className="font-heading text-2xl font-bold text-primary-foreground">
            {formType === "register" ? "Register Your Child" : "Book a Session"}
          </h2>
          <p className="text-primary-foreground/80 text-sm mt-1">
            {formType === "register" 
              ? "Fill in the details to get started" 
              : "Schedule a tutoring session"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parentName">Parent's Name</Label>
              <Input id="parentName" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="060 330 5319" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="parent@email.com" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="childName">Child's Name</Label>
              <Input id="childName" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade/Level</Label>
              <Select required>
                <SelectTrigger id="grade">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grade1-3">Grade 1-3</SelectItem>
                  <SelectItem value="grade4-6">Grade 4-6</SelectItem>
                  <SelectItem value="grade7-9">Grade 7-9</SelectItem>
                  <SelectItem value="grade10-12">Grade 10-12</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subjects">Subjects Needed</Label>
            <Input id="subjects" placeholder="e.g., Mathematics, English, Science" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mode">Preferred Mode</Label>
            <Select required>
              <SelectTrigger id="mode">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="face-to-face">Face-to-Face</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formType === "booking" && (
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date & Time</Label>
              <Input id="preferredDate" type="datetime-local" required />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your child's learning needs or any specific requirements..."
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            variant="secondary" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : (formType === "register" ? "Submit Registration" : "Book Session")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
