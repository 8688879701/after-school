import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/30 rounded-full animate-wiggle" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-bounce">
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-5xl lg:text-7xl text-foreground leading-tight">
                <span className="inline-block animate-bounce-gentle">🎓</span> EASY LEARN
                <span className="bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow-text bg-[length:200%_200%]"> After School Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From basics to brilliance - Fun learning adventures that help kids excel academically and build confidence for life! 🌟✨
              </p>
            </div>
            
            <div className="pt-8 space-y-4">
              <a 
                href="https://wa.me/918500506578" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-rainbow animate-pulse-rainbow"
              >
                <span className="text-2xl animate-wiggle">📱</span>
                <span>Start Learning Adventure!</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span className="animate-bounce-gentle">✨</span>
                <span>Join 100+ happy kids learning with us!</span>
                <span className="animate-bounce-gentle" style={{animationDelay: '0.5s'}}>🎉</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-bounce" style={{animationDelay: '0.3s'}}>
            <div className="relative rounded-3xl overflow-hidden shadow-magical bg-gradient-fun p-4">
              <img 
                src="/lovable-uploads/561a1032-8b76-40e4-8800-099927fadef2.png" 
                alt="EASY LEARN After School Academy Logo" 
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating fun elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-rainbow animate-magical-spin">
              <span className="text-3xl">🎓</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-success rounded-full flex items-center justify-center shadow-rainbow animate-bounce-gentle" style={{animationDelay: '2s'}}>
              <span className="text-2xl">⭐</span>
            </div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center shadow-card animate-wiggle" style={{animationDelay: '1s'}}>
              <span className="text-xl">📚</span>
            </div>
            <div className="absolute top-1/4 -right-8 w-18 h-18 bg-secondary rounded-full flex items-center justify-center shadow-card animate-float" style={{animationDelay: '3s'}}>
              <span className="text-xl">🌟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;