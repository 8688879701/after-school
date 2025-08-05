import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                EASY LEARN
                <span className="bg-gradient-hero bg-clip-text text-transparent"> After School Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From basics to brilliance - Premium tutoring programs designed to help students excel academically and build confidence for life.
              </p>
            </div>
            
            <div className="pt-8">
              <a 
                href="https://wa.me/918500506578" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>📱</span>
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src="/lovable-uploads/561a1032-8b76-40e4-8800-099927fadef2.png" 
                alt="EASY LEARN After School Academy Logo" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-card animate-float">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-card animate-float" style={{animationDelay: '2s'}}>
              <span className="text-xl">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;