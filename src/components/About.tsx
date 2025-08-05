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
    description: "Maximum 6 students per class for personalized attention"
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
            Why Choose <span className="text-primary">EASY LEARN</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a tutoring center. We're your partner in your child's educational journey, 
            providing the support, guidance, and expertise needed for academic success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={studentsLearning} 
                alt="Students learning together with laptops" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-hero rounded-xl p-4 shadow-glow">
              <div className="text-center text-primary-foreground">
                <div className="font-bold text-2xl">98%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-3xl text-foreground">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At EASY LEARN, we believe every student has the potential to excel. Our mission is to provide 
              exceptional after-school tutoring that takes students from basics to brilliance, building confidence, 
              critical thinking skills, and a lifelong love of learning.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-success-foreground text-sm">✓</span>
                </div>
                <span className="text-foreground">Personalized Learning Plans</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-success-foreground text-sm">✓</span>
                </div>
                <span className="text-foreground">Regular Progress Reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-success-foreground text-sm">✓</span>
                </div>
                <span className="text-foreground">Supportive Environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-success-foreground text-sm">✓</span>
                </div>
                <span className="text-foreground">Academic Excellence</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
            Why Parents Choose Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Improvement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;