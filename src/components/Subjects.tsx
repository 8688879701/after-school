import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import tutoringSession from "@/assets/tutoring-session.jpg";
import smallGroupTutoring from "@/assets/small-group-tutoring.jpg";
import { useSubjects } from "@/hooks/useDatabase";

const Subjects = () => {
  const { subjects, loading, error } = useSubjects();

  if (loading) {
    return (
      <section id="subjects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Loading Subjects... <span className="animate-spin inline-block">⏳</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="subjects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Unable to load subjects
            </h2>
            <p className="text-muted-foreground">Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

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

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card 
              key={subject.id} 
              className="bg-gradient-card border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <CardTitle className="font-heading text-xl text-foreground">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">{subject.description}</p>
                {/* Available Levels */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary text-center">Available Levels:</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {subject.grade_levels.map((level, levelIndex) => (
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