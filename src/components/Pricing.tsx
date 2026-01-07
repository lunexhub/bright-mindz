import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingProps {
  onRegisterClick: () => void;
}

const pricingPlans = [
  {
    name: "Junior",
    subtitle: "Primary School",
    price: "R 399",
    period: "per month",
    features: [
      "Single or multi-subject tuition",
      "Homework assistance",
      "Test preparation",
      "Individual or group sessions",
      "Face-to-face or online",
    ],
    popular: false,
  },
  {
    name: "Senior",
    subtitle: "High School",
    price: "R 599",
    period: "per month",
    features: [
      "All Junior features",
      "Advanced subject support",
      "Exam preparation",
      "Project & assignment help",
      "Flexible scheduling",
      "Progress tracking",
    ],
    popular: true,
  },
];

const Pricing = ({ onRegisterClick }: PricingProps) => {
  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Affordable Excellence</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invest in your child's future. Results-driven tutoring that delivers measurable improvements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-3xl p-8 ${
                plan.popular 
                  ? "border-2 border-secondary card-hover-shadow scale-105" 
                  : "border border-border card-shadow"
              } transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="accent-gradient text-secondary-foreground text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-heading font-extrabold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "secondary" : "outline"} 
                size="lg" 
                className="w-full font-bold"
                onClick={onRegisterClick}
              >
                {plan.popular ? "Start Achieving Success →" : "Choose This Plan"}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground mt-12">
          * Prices may vary based on subject complexity and session frequency. Contact us for a custom quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
