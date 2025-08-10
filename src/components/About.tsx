import { Card, CardContent } from "@/components/ui/card";
import studentsLearning from "@/assets/students-learning.jpg";

const features = [
  {
    icon: "👨‍🏫",
    title: "Expert Tutors",
    description: "Certified teachers with years of experience and passion for education"
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    description: "Classes that fit your family's busy schedule, including weekends"
  },
  {
    icon: "👥",
    title: "Small Class Sizes",
    description: "Maximum 10 students per tutor for personalized attention"
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Regular assessments and detailed progress reports for parents"
  },
  {
    icon: "🏆",
    title: "Proven Results",
    description: "98% of our students show improvement within 3 months"
  },
  {
    icon: "💡",
    title: "Modern Methods",
    description: "Interactive learning tools and innovative teaching techniques"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Fun floating elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-accent/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-28 h-28 bg-primary/20 rounded-full animate-bounce-gentle"></div>
      <div className="absolute top-1/2 left-8 w-16 h-16 bg-secondary/40 rounded-full animate-wiggle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-in-bounce" style={{animationDelay: '1s'}}>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            <span className="animate-bounce-gentle inline-block" style={{animationDuration: '3s'}}>🌟</span> Why Choose 
            <span className="bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow-text bg-[length:200%_200%]" style={{animationDuration: '5s'}}> EASY LEARN</span>?
            <span className="animate-wiggle inline-block ml-2" style={{animationDuration: '4s'}}>🎯</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a tutoring center! We're your magical partner in your child's learning adventure, 
            providing support, guidance, and expertise for amazing academic success! ✨📚
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-2 border-primary/20 shadow-rainbow hover:shadow-magical transition-all duration-700 hover:-translate-y-3 hover:scale-105 animate-slide-in-bounce group"
              style={{animationDelay: `${index * 0.3}s`, animationDuration: '1.5s'}}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-5xl mb-4 animate-bounce-gentle group-hover:animate-magical-spin transition-all duration-500" style={{animationDuration: '4s'}}>
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-in-bounce" style={{animationDelay: '1.5s', animationDuration: '1.5s'}}>
            <div className="relative overflow-hidden rounded-3xl shadow-magical bg-gradient-fun p-4">
              <img 
                src={studentsLearning} 
                alt="Happy students learning together with laptops" 
                className="w-full h-[400px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
            {/* Fun floating badges */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-rainbow animate-wiggle" style={{animationDuration: '5s'}}>
              <span className="text-xl">🏆</span>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-bounce" style={{animationDelay: '2s', animationDuration: '1.5s'}}>
            <h3 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
              <span className="animate-bounce-gentle inline-block" style={{animationDuration: '4s'}}>🚀</span> Our Magical Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At EASY LEARN, we believe every student is a superstar! ⭐ Our mission is to create 
              amazing learning adventures that take kids from basics to brilliance, building confidence, 
              curiosity, and a lifelong love of learning! 🌟📚✨
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 animate-slide-in-bounce" style={{animationDelay: '2.5s', animationDuration: '1.5s'}}>
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center flex-shrink-0 shadow-rainbow animate-bounce-gentle" style={{animationDuration: '4s'}}>
                  <span className="text-success-foreground text-lg">✨</span>
                </div>
                <span className="text-foreground font-medium">Personalized Learning Adventures</span>
              </div>
              <div className="flex items-center space-x-3 animate-slide-in-bounce" style={{animationDelay: '3s', animationDuration: '1.5s'}}>
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center flex-shrink-0 shadow-rainbow animate-bounce-gentle" style={{animationDuration: '4s'}}>
                  <span className="text-success-foreground text-lg">📊</span>
                </div>
                <span className="text-foreground font-medium">Fun Progress Reports</span>
              </div>
              <div className="flex items-center space-x-3 animate-slide-in-bounce" style={{animationDelay: '3.5s', animationDuration: '1.5s'}}>
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center flex-shrink-0 shadow-rainbow animate-bounce-gentle" style={{animationDuration: '4s'}}>
                  <span className="text-success-foreground text-lg">🌈</span>
                </div>
                <span className="text-foreground font-medium">Supportive & Fun Environment</span>
              </div>
              <div className="flex items-center space-x-3 animate-slide-in-bounce" style={{animationDelay: '4s', animationDuration: '1.5s'}}>
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center flex-shrink-0 shadow-rainbow animate-bounce-gentle" style={{animationDuration: '4s'}}>
                  <span className="text-success-foreground text-lg">🎯</span>
                </div>
                <span className="text-foreground font-medium">Amazing Academic Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;