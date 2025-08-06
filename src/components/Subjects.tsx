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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                      <span key={levelIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
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