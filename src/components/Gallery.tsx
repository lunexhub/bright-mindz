import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";

const Gallery = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Facility</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Where Learning Happens</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated learning environment designed for focused studying and personalized tutoring sessions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="group overflow-hidden rounded-2xl card-shadow hover:card-hover-shadow transition-all duration-300">
            <img 
              src={classroom1} 
              alt="Bright Mindz tutoring classroom" 
              className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="group overflow-hidden rounded-2xl card-shadow hover:card-hover-shadow transition-all duration-300">
            <img 
              src={classroom2} 
              alt="Bright Mindz learning environment" 
              className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
