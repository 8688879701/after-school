import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import programmingJava from "@/assets/programming-java.jpg";
import codingMacbook from "@/assets/coding-macbook.jpg";
import webDevelopment from "@/assets/web-development.jpg";

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
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">🔢</div>
              <CardTitle className="font-heading text-xl text-foreground">Mathematics</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">From basic arithmetic to advanced calculus</p>
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary">Available Levels:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Elementary</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Middle School</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">High School</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">📚</div>
              <CardTitle className="font-heading text-xl text-foreground">English & Literature</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">Reading comprehension, writing, and critical analysis</p>
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary">Available Levels:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Grammar</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Creative Writing</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Literature</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">🔬</div>
              <CardTitle className="font-heading text-xl text-foreground">Science</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">Biology, chemistry, physics, and earth sciences</p>
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary">Available Levels:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">General Science</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Biology</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Chemistry</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden mb-4">
                <img src={programmingJava} alt="Java Programming" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="font-heading text-xl text-foreground">Computer Science</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">Programming, web development, and digital literacy</p>
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary">Available Levels:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Coding Basics</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Python</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Java</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden mb-4">
                <img src={webDevelopment} alt="Web Development" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="font-heading text-xl text-foreground">Web Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">HTML, CSS, JavaScript and modern frameworks</p>
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary">Available Levels:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">HTML/CSS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">React</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden mb-4">
                <img src={codingMacbook} alt="Advanced Programming" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="font-heading text-xl text-foreground">Test Preparation</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">SAT, ACT, and standardized test preparation</p>
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary">Available Levels:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">SAT Prep</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">ACT Prep</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">State Tests</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Subjects;