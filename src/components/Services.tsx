import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  TrendingUp, 
  Users, 
  Search, 
  PenTool, 
  BarChart3,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Engage your audience across all platforms with data-driven strategies that convert followers into customers.",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Reports"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO & SEM",
      description: "Dominate search results with our comprehensive SEO strategies and targeted advertising campaigns.",
      features: ["Keyword Research", "On-page SEO", "Google Ads", "Performance Tracking"]
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Content Creation",
      description: "Compelling content that tells your story and drives engagement across all digital channels.",
      features: ["Video Production", "Graphic Design", "Copywriting", "Brand Storytelling"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies tailored to your business goals and market.",
      features: ["Market Analysis", "Competitor Research", "Campaign Planning", "ROI Optimization"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message and reach new audiences.",
      features: ["Influencer Research", "Campaign Management", "Partnership Deals", "Performance Analysis"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Insights",
      description: "Data-driven insights that help you make informed decisions and optimize your marketing efforts.",
      features: ["Custom Dashboards", "Performance Reports", "Conversion Tracking", "Strategy Optimization"]
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 border-border/30 bg-background hover:bg-muted/30 backdrop-blur-sm group shadow-lg rounded-xl"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="gradient" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;