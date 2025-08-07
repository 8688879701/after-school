import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20 shadow-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 animate-slide-in-bounce">
          <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-rainbow animate-wiggle">
            <span className="text-primary-foreground font-bold text-xl">🎓</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground hover:text-primary transition-colors">EASY LEARN</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">About 📖</a>
          <a href="#subjects" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Subjects 📚</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Contact 📞</a>
        </nav>
        
        <a 
          href="https://wa.me/918500506578" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-rainbow animate-pulse-rainbow"
        >
          <span className="animate-wiggle inline-block">📱</span> WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;