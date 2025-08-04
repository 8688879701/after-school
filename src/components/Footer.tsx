const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="font-heading font-bold text-xl">BrightMinds</span>
            </div>
            <p className="text-background/80 text-sm">
              Empowering students to reach their full potential through exceptional after-school tutoring and enrichment programs.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors">About Us</a>
              <a href="#subjects" className="block text-background/80 hover:text-primary transition-colors">Subjects</a>
              <a href="#contact" className="block text-background/80 hover:text-primary transition-colors">Contact</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Enrollment</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Subjects</h4>
            <div className="space-y-2 text-sm">
              <div className="text-background/80">Mathematics</div>
              <div className="text-background/80">English & Literature</div>
              <div className="text-background/80">Science</div>
              <div className="text-background/80">Computer Science</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-background/80">
              <div>123 Education Lane</div>
              <div>Learning City, LC 12345</div>
              <div>(555) 123-BRIGHT</div>
              <div>info@brightminds.edu</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 BrightMinds After School. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;