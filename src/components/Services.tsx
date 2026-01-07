import { BookOpen, FileText, Award, Monitor, Home, Users } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Homework Assistance & Guidance",
    description: "We help your child understand and complete their homework effectively with personalized support.",
  },
  {
    icon: FileText,
    title: "Project & Assignment Assistance",
    description: "Support in managing and excelling in school projects and assignments with structured guidance.",
  },
  {
    icon: Award,
    title: "Test, Assessment & Exam Preparation",
    description: "Focused preparation to help your child perform their best in tests, assessments, and exams.",
  },
  {
    icon: Monitor,
    title: "Multi-Mode Learning",
    description: "Option of both face-to-face and/or online classes for maximum flexibility and convenience.",
  },
  {
    icon: Users,
    title: "Individual & Group Tuition",
    description: "Choose between personalized one-on-one sessions or small group classes based on your preference.",
  },
  {
    icon: Home,
    title: "Home/Office Tuition",
    description: "Tuition provided in the comfort of your home, business, or work environment for convenience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Everything Your Child Needs to Succeed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tutoring services that deliver real results. Every service designed to turn your child into a top performer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 md:p-8 card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
