import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Social Media", "SEO", "Content", "Strategy"];
  
  const projects = [
    {
      id: 1,
      title: "TechCorp Social Revolution",
      category: "Social Media",
      description: "Transformed TechCorp's social presence with 300% engagement growth and 50K new followers in 6 months.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: ["300% Engagement", "50K Followers", "150% Sales"],
      tags: ["Instagram", "LinkedIn", "Content Strategy"]
    },
    {
      id: 2,
      title: "EcoLiving SEO Domination",
      category: "SEO",
      description: "Achieved #1 rankings for 20+ keywords and increased organic traffic by 400% for sustainable living brand.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      results: ["400% Traffic", "#1 Rankings", "250% Conversions"],
      tags: ["Google SEO", "Local Search", "Content Marketing"]
    },
    {
      id: 3,
      title: "FashionForward Content Campaign",
      category: "Content",
      description: "Created viral content series that generated 2M views and established brand as industry thought leader.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      results: ["2M Views", "500K Shares", "Brand Authority"],
      tags: ["Video Content", "Photography", "Brand Storytelling"]
    },
    {
      id: 4,
      title: "StartupBoost Digital Strategy",
      category: "Strategy",
      description: "Comprehensive digital transformation resulting in 500% ROI and successful Series A funding.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      results: ["500% ROI", "Series A Funded", "Market Leader"],
      tags: ["Digital Strategy", "Growth Hacking", "Performance Marketing"]
    },
    {
      id: 5,
      title: "RestaurantChain Social Presence",
      category: "Social Media",
      description: "Built engaging social community with user-generated content strategy across 50+ locations.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      results: ["100K Community", "UGC Success", "15% Sales Lift"],
      tags: ["Community Building", "UGC", "Local Marketing"]
    },
    {
      id: 6,
      title: "HealthTech Content Authority",
      category: "Content",
      description: "Established thought leadership through educational content, resulting in 10x qualified leads.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      results: ["10x Qualified Leads", "Industry Authority", "Media Features"],
      tags: ["Educational Content", "Thought Leadership", "Lead Generation"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped companies transform their digital presence and achieve remarkable growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <Button size="icon" variant="glass">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="bg-gradient-primary text-white border-0">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-xs bg-muted px-2 py-1 rounded">
                      {result}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all">
                  View Case Study
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="gradient" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;