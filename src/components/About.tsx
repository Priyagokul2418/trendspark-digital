import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users2, 
  Lightbulb, 
  Target,
  CheckCircle 
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Cutting-edge strategies that keep you ahead of the digital curve."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results-Driven",
      description: "Every campaign is designed with measurable outcomes in mind."
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Client-Focused",
      description: "Your success is our success. We're partners in your growth journey."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Award-winning creative work that makes your brand unforgettable."
    }
  ];

  const achievements = [
    "Industry-leading 98% client retention rate",
    "Over 500+ successful campaigns launched",
    "50M+ social media reach generated",
    "Recognized as Top Digital Agency 2023",
    "Certified Google & Meta Business Partners"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Crafting Digital 
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                Success Stories
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not just another digital agency. We're your strategic partners in building remarkable online presence that drives real business growth.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Founded on the belief that every brand has a unique story to tell, we combine creative excellence with data-driven strategies to deliver exceptional results. Our team of digital natives, creatives, and strategists work together to transform your vision into digital reality.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="gradient" size="lg" className="mb-8">
              Our Story
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Team Members" },
                { number: "500+", label: "Happy Clients" },
                { number: "15", label: "Awards Won" }
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center border-0 bg-muted/50">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="p-6 border-0 bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                  <div className="text-primary mb-3">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;