import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const subjects = [
  {
    name: "Mathematics",
    description: "From basic arithmetic to advanced calculus, building strong mathematical foundations",
    icon: "🔢",
    levels: ["Elementary", "Middle School", "High School", "College Prep"]
  },
  {
    name: "Science",
    description: "Physics, Chemistry, and Biology with hands-on experiments and practical learning",
    icon: "🔬",
    levels: ["General Science", "Physics", "Chemistry", "Biology"]
  },
  {
    name: "English",
    description: "Reading comprehension, writing skills, grammar, and literature analysis",
    icon: "📚",
    levels: ["Elementary", "Middle School", "High School", "Advanced"]
  },
  {
    name: "Social Studies",
    description: "History, Geography, Civics, and Social Sciences for well-rounded education",
    icon: "🌍",
    levels: ["World History", "Local History", "Geography", "Civics"]
  },
  {
    name: "Telugu",
    description: "Native language proficiency, literature, and communication skills",
    icon: "🗣️",
    levels: ["Basic", "Intermediate", "Advanced", "Literature"]
  },
  {
    name: "Hindi",
    description: "Second language learning with focus on reading, writing, and speaking",
    icon: "📝",
    levels: ["Basic", "Intermediate", "Advanced", "Literature"]
  },
];

const Subjects = () => {
  return (
    <section id="subjects" className="py-20 bg-gradient-to-br from-secondary/30 via-background to-accent/20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/20 rounded-full animate-bounce-gentle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-in-bounce">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            <span className="animate-wiggle inline-block">🎯</span> Fun Subjects We 
            <span className="bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow-text bg-[length:200%_200%]"> Teach</span>
            <span className="animate-bounce-gentle inline-block ml-2">✨</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Amazing learning adventures across all subjects with fun activities and personalized plans for every young scholar! 🌟
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-2 border-primary/20 shadow-rainbow hover:shadow-magical transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-slide-in-bounce group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 animate-bounce-gentle group-hover:animate-wiggle transition-all duration-300">
                  {subject.icon}
                </div>
                <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                  {subject.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {subject.description}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-primary flex items-center justify-center gap-2">
                    <span className="animate-wiggle">🎓</span>
                    Available Levels:
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {subject.levels.map((level, levelIndex) => (
                      <span 
                        key={levelIndex} 
                        className="px-3 py-2 bg-gradient-fun text-foreground rounded-full text-xs font-medium shadow-card hover:shadow-rainbow transition-all duration-300 hover:scale-110 animate-bounce-gentle"
                        style={{animationDelay: `${levelIndex * 0.2}s`}}
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
      </div>
    </section>
  );
};

export default Subjects;