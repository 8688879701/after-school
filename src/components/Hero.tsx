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
                Unlock Your Child's
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Potential</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Premium after-school tutoring and enrichment programs designed to help students excel academically and build confidence for life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-primary-foreground shadow-glow hover:scale-105 transition-all duration-300 font-semibold"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Expert Tutors</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-success">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Students learning together" 
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