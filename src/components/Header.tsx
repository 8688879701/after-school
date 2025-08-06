import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">EASY LEARN</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#subjects" className="text-muted-foreground hover:text-primary transition-colors">Subjects</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <a 
          href="https://wa.me/918500506578" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;