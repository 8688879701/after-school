import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import tutoringSession from "@/assets/tutoring-session.jpg";
import smallGroupTutoring from "@/assets/small-group-tutoring.jpg";

const subjects = [
  {
    name: "Mathematics",
    description: "From basic arithmetic to advanced calculus, building strong mathematical foundations with proven teaching methods",
    icon: "🔢",
    levels: ["Elementary", "Middle School", "High School", "College Prep"],
    successRate: "95%",
    studentsHelped: "150+"
  },
  {
    name: "Science",
    description: "Physics, Chemistry, and Biology with hands-on experiments, practical learning, and exam preparation",
    icon: "🔬",
    levels: ["General Science", "Physics", "Chemistry", "Biology"],
    successRate: "92%",
    studentsHelped: "120+"
  },
  {
    name: "English",
    description: "Reading comprehension, writing skills, grammar, and literature analysis for academic excellence",
    icon: "📚",
    levels: ["Elementary", "Middle School", "High School", "Advanced"],
    successRate: "97%",
    studentsHelped: "200+"
  },
  {
    name: "Social Studies",
    description: "History, Geography, Civics, and Social Sciences for comprehensive understanding and better grades",
    icon: "🌍",
    levels: ["World History", "Local History", "Geography", "Civics"],
    successRate: "90%",
    studentsHelped: "100+"
  },
  {
    name: "Telugu",
    description: "Native language proficiency, literature, and communication skills with cultural understanding",
    icon: "🗣️",
    levels: ["Basic", "Intermediate", "Advanced", "Literature"],
    successRate: "98%",
    studentsHelped: "180+"
  },
  {
    name: "Hindi",
    description: "Second language learning with focus on reading, writing, speaking, and board exam preparation",
    icon: "📝",
    levels: ["Basic", "Intermediate", "Advanced", "Literature"],
    successRate: "94%",
    studentsHelped: "130+"
  },
];

const Subjects = () => {
  return (
    <section id="subjects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive <span className="text-primary">Subject Coverage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert tutoring across all major subjects with proven track record of academic improvement. 
            Our qualified teachers ensure your child gets the personalized attention they deserve.
          </p>
        </div>

        {/* Tutoring Images Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img 
              src={tutoringSession} 
              alt="Professional tutoring session with qualified teacher" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-heading font-bold text-xl mb-2">One-on-One Attention</h3>
              <p className="text-sm opacity-90">Personalized learning for maximum progress</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img 
              src={smallGroupTutoring} 
              alt="Small group tutoring class with engaged students" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-heading font-bold text-xl mb-2">Small Class Sizes</h3>
              <p className="text-sm opacity-90">Maximum 10 students per class for better focus</p>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-16 border border-primary/20">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Grade Improvement</div>
            </div>
          </div>
        </div>
        
        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <CardTitle className="font-heading text-xl text-foreground">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">{subject.description}</p>
                
                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">{subject.successRate}</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">{subject.studentsHelped}</div>
                    <div className="text-xs text-muted-foreground">Students Helped</div>
                  </div>
                </div>

                {/* Available Levels */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary text-center">Available Levels:</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {subject.levels.map((level, levelIndex) => (
                      <span 
                        key={levelIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Ready to See Your Child Excel?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of satisfied parents who trust Easy Learn for their child's academic success.
            </p>
            <a 
              href="https://wa.me/918500506578" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-card"
            >
              <span>📞</span>
              <span>Schedule Free Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;