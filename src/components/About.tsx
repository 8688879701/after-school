import { Card, CardContent } from "@/components/ui/card";

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
            Why Choose <span className="text-primary">BrightMinds</span>?
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
        
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At BrightMinds, we believe every student has the potential to excel. Our mission is to provide 
            exceptional after-school tutoring that not only improves grades but builds confidence, 
            critical thinking skills, and a lifelong love of learning. We create a supportive environment 
            where students can thrive academically and personally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;