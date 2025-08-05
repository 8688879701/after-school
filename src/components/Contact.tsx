import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

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
          <div className="space-y-8">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">📍</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-muted-foreground">NGO Colony, Nandyal, 518502</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">8500 50 65 78 / 75</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">✉️</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">easylearnacademy@gmail.com</div>
                    </div>
                  </div>
                  
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
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Operating Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">3:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">1:00 PM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-success/10 to-accent/10 border-0 shadow-card">
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