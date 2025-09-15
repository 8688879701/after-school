import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
            Contact <span className="text-primary">EASY LEARN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to help your child succeed? Contact us for a free consultation and assessment.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <ContactForm />
            
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href="https://maps.app.goo.gl/91zV3uEaooeDQDGR9?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <span className="text-blue-600">📍</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location (Click to view on map)</div>
                      <div className="text-muted-foreground">NGO Colony, Nandyal, 518502</div>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+918500506578" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <span className="text-green-600">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone (Click to call)</div>
                      <div className="text-muted-foreground">8500 50 65 78 / 75</div>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:easylearnacademy@gmail.com" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                      <span className="text-orange-600">✉️</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email (Click to send)</div>
                      <div className="text-muted-foreground">easylearnacademy@gmail.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/918500506578" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[#25D366]/20 rounded-lg flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-muted-foreground">8500 50 65 78</div>
                    </div>
                  </a>
                  
                  <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-gradient-to-r from-blue-300/20 to-pink-300/20">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📍</div>
                      <div className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Visit Our Academy
                      </div>
                      <a 
                        href="https://maps.app.goo.gl/91zV3uEaooeDQDGR9?g_st=aw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-base font-medium mt-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-colors cursor-pointer"
                      >
                        NGO Colony, Nandyal, 518502
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <Card className="bg-gradient-to-r from-success/10 to-accent/10 border-0 shadow-card max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Special Offer</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  First consultation and assessment absolutely free for new students!
                </p>
                <Button variant="outline" size="sm" className="border-success text-success hover:bg-success hover:text-success-foreground">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;