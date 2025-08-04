import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const subjects = [
  {
    name: "Mathematics",
    description: "From basic arithmetic to advanced calculus",
    icon: "🔢",
    levels: ["Elementary", "Middle School", "High School"]
  },
  {
    name: "English & Literature",
    description: "Reading comprehension, writing, and critical analysis",
    icon: "📚",
    levels: ["Grammar", "Creative Writing", "Literature"]
  },
  {
    name: "Science",
    description: "Biology, chemistry, physics, and earth sciences",
    icon: "🔬",
    levels: ["General Science", "Biology", "Chemistry", "Physics"]
  },
  {
    name: "Social Studies",
    description: "History, geography, civics, and cultural studies",
    icon: "🌍",
    levels: ["World History", "Geography", "Government"]
  },
  {
    name: "Computer Science",
    description: "Programming, web development, and digital literacy",
    icon: "💻",
    levels: ["Coding Basics", "Web Development", "Python"]
  },
  {
    name: "Test Preparation",
    description: "SAT, ACT, and standardized test preparation",
    icon: "📝",
    levels: ["SAT Prep", "ACT Prep", "State Tests"]
  }
];

const Subjects = () => {
  return (
    <section id="subjects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
            Subjects We <span className="text-primary">Teach</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tutoring across all major subjects with personalized learning plans for every student
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <CardTitle className="font-heading text-xl text-foreground">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{subject.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary">Available Levels:</div>
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
      </div>
    </section>
  );
};

export default Subjects;